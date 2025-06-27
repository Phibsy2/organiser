import { useState, useEffect, useCallback } from 'react';
import Dexie from 'dexie';

// Define the database schema
class JuraFitDB extends Dexie {
  pendingSync!: Dexie.Table<PendingSyncItem, number>;

  constructor() {
    super('JuraFitDB');
    this.version(1).stores({
      pendingSync: '++id, type, action, timestamp, synced'
    });
  }
}

interface PendingSyncItem {
  id?: number;
  type: 'study' | 'training' | 'measurement' | 'settings';
  action: 'create' | 'update' | 'delete';
  data: any;
  timestamp: Date;
  synced: boolean;
}

const db = new JuraFitDB();

const useOfflineSync = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [pendingItems, setPendingItems] = useState<PendingSyncItem[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('App is online');
      // Trigger sync when coming online
      syncPendingItems();
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log('App is offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load pending items on mount
  useEffect(() => {
    loadPendingItems();
  }, []);

  const loadPendingItems = async () => {
    try {
      const items = await db.pendingSync
        .where('synced')
        .equals(0)
        .toArray();
      setPendingItems(items);
    } catch (error) {
      console.error('Error loading pending items:', error);
    }
  };

  // Add item to sync queue
  const addToSyncQueue = useCallback(async (
    type: PendingSyncItem['type'],
    action: PendingSyncItem['action'],
    data: any
  ) => {
    try {
      const item: PendingSyncItem = {
        type,
        action,
        data,
        timestamp: new Date(),
        synced: false
      };

      const id = await db.pendingSync.add(item);
      console.log('Added to sync queue:', { id, type, action });

      // If online, try to sync immediately
      if (isOnline) {
        syncPendingItems();
      }

      // Reload pending items
      loadPendingItems();
    } catch (error) {
      console.error('Error adding to sync queue:', error);
    }
  }, [isOnline]);

  // Sync pending items
  const syncPendingItems = useCallback(async () => {
    if (!isOnline || isSyncing) {
      return;
    }

    setIsSyncing(true);
    console.log('Starting sync...');

    try {
      const items = await db.pendingSync
        .where('synced')
        .equals(0)
        .toArray();

      for (const item of items) {
        try {
          // In a real app, this would make API calls
          // For now, we'll simulate the sync
          await simulateApiCall(item);

          // Mark as synced
          await db.pendingSync.update(item.id!, { synced: true });
          console.log('Synced item:', item.id);
        } catch (error) {
          console.error('Error syncing item:', item.id, error);
          // Continue with next item
        }
      }

      // Clean up synced items older than 7 days
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      await db.pendingSync
        .where('synced')
        .equals(1)
        .and(item => item.timestamp < weekAgo)
        .delete();

      // Reload pending items
      loadPendingItems();
    } catch (error) {
      console.error('Error during sync:', error);
    } finally {
      setIsSyncing(false);
      console.log('Sync completed');
    }
  }, [isOnline, isSyncing]);

  // Simulate API call (replace with actual API calls)
  const simulateApiCall = async (item: PendingSyncItem): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          console.log('API call successful for:', item);
          resolve();
        } else {
          reject(new Error('Simulated API error'));
        }
      }, 500);
    });
  };

  // Clear all pending items
  const clearPendingItems = useCallback(async () => {
    try {
      await db.pendingSync.clear();
      setPendingItems([]);
      console.log('Cleared all pending items');
    } catch (error) {
      console.error('Error clearing pending items:', error);
    }
  }, []);

  // Get sync status
  const getSyncStatus = useCallback(() => {
    return {
      isOnline,
      isSyncing,
      pendingCount: pendingItems.length,
      oldestPending: pendingItems.length > 0 
        ? pendingItems[0].timestamp 
        : null
    };
  }, [isOnline, isSyncing, pendingItems]);

  return {
    isOnline,
    isSyncing,
    pendingItems,
    addToSyncQueue,
    syncPendingItems,
    clearPendingItems,
    getSyncStatus
  };
};

export default useOfflineSync;