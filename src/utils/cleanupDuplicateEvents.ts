export const cleanupDuplicateEvents = () => {
  const storageKey = 'calendar-storage';
  const stored = localStorage.getItem(storageKey);
  
  if (!stored) return;
  
  try {
    const data = JSON.parse(stored);
    if (!data.state || !data.state.events) return;
    
    const events = data.state.events;
    const seenIds = new Set<string>();
    const cleanedEvents: any[] = [];
    
    // Check for duplicate IDs and regenerate if needed
    events.forEach((event: any) => {
      if (seenIds.has(event.id)) {
        // Generate new unique ID for duplicate
        event.id = `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${cleanedEvents.length}`;
      }
      seenIds.add(event.id);
      cleanedEvents.push(event);
    });
    
    // Only update if we found duplicates
    if (cleanedEvents.length !== events.length || cleanedEvents.some((e, i) => e.id !== events[i].id)) {
      data.state.events = cleanedEvents;
      localStorage.setItem(storageKey, JSON.stringify(data));
      console.log('Fixed duplicate event IDs');
      // Force reload to apply changes
      window.location.reload();
    }
  } catch (error) {
    console.error('Error cleaning up events:', error);
  }
};