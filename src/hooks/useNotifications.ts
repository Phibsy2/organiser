import { useCallback, useEffect } from 'react';
import useSettingsStore from '../store/settingsStore';

interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
  actions?: NotificationAction[];
  data?: any;
}

const useNotifications = () => {
  const { notifications, requestNotificationPermission } = useSettingsStore();

  // Check if notifications are supported
  const isSupported = 'Notification' in window;

  // Request permission
  const requestPermission = useCallback(async () => {
    if (!isSupported) {
      console.log('Notifications are not supported in this browser');
      return false;
    }

    return await requestNotificationPermission();
  }, [isSupported, requestNotificationPermission]);

  // Send notification
  const sendNotification = useCallback(
    async (options: NotificationOptions): Promise<boolean> => {
      if (!isSupported) {
        console.log('Notifications are not supported');
        return false;
      }

      if (!notifications.enabled) {
        console.log('Notifications are disabled in settings');
        return false;
      }

      if (Notification.permission !== 'granted') {
        const granted = await requestPermission();
        if (!granted) {
          console.log('Notification permission denied');
          return false;
        }
      }

      try {
        const notification = new Notification(options.title, {
          body: options.body,
          icon: options.icon || '/icon-192.png',
          badge: options.badge || '/icon-192.png',
          tag: options.tag,
          requireInteraction: options.requireInteraction,
          data: options.data,
          silent: !notifications.sound
        });

        notification.onclick = (event) => {
          event.preventDefault();
          window.focus();
          notification.close();
        };

        return true;
      } catch (error) {
        console.error('Error sending notification:', error);
        return false;
      }
    },
    [isSupported, notifications.enabled, notifications.sound, requestPermission]
  );

  // Schedule notification
  const scheduleNotification = useCallback(
    (options: NotificationOptions, delayMs: number): NodeJS.Timeout | null => {
      if (!isSupported || !notifications.enabled) {
        return null;
      }

      const timeoutId = setTimeout(() => {
        sendNotification(options);
      }, delayMs);

      return timeoutId;
    },
    [isSupported, notifications.enabled, sendNotification]
  );

  // Study reminder
  const sendStudyReminder = useCallback(
    (moduleName: string, topic?: string) => {
      if (!notifications.studyReminders) return;

      sendNotification({
        title: '📚 Zeit zum Lernen!',
        body: topic 
          ? `${moduleName}: ${topic} wartet auf dich`
          : `Zeit für ${moduleName}`,
        tag: 'study-reminder',
        requireInteraction: true
      });
    },
    [notifications.studyReminders, sendNotification]
  );

  // Training reminder
  const sendTrainingReminder = useCallback(
    (workoutType: string) => {
      if (!notifications.trainingReminders) return;

      sendNotification({
        title: '💪 Zeit fürs Training!',
        body: `${workoutType} steht heute an`,
        tag: 'training-reminder',
        requireInteraction: true
      });
    },
    [notifications.trainingReminders, sendNotification]
  );

  // Pomodoro notifications
  const sendPomodoroNotification = useCallback(
    (type: 'work' | 'break', duration: number) => {
      const isWork = type === 'work';
      sendNotification({
        title: isWork ? '🍅 Pomodoro beendet!' : '☕ Pause vorbei!',
        body: isWork 
          ? `Zeit für eine ${duration}-minütige Pause`
          : 'Bereit für die nächste Arbeitseinheit?',
        tag: 'pomodoro',
        requireInteraction: false
      });
    },
    [sendNotification]
  );

  // Daily goal reminder
  const sendDailyGoalReminder = useCallback(
    (completed: number, total: number) => {
      if (!notifications.dailyGoalReminders) return;

      const remaining = total - completed;
      if (remaining <= 0) return;

      sendNotification({
        title: '🎯 Tagesziele Check',
        body: `Noch ${remaining} von ${total} Zielen offen heute`,
        tag: 'daily-goals',
        requireInteraction: false
      });
    },
    [notifications.dailyGoalReminders, sendNotification]
  );

  // Achievement notification
  const sendAchievementNotification = useCallback(
    (achievement: string, description?: string) => {
      sendNotification({
        title: '🏆 Erfolg freigeschaltet!',
        body: description || achievement,
        tag: 'achievement',
        requireInteraction: false
      });
    },
    [sendNotification]
  );

  // Test notification permission on mount
  useEffect(() => {
    if (isSupported && Notification.permission === 'default') {
      console.log('Notification permission not yet requested');
    }
  }, [isSupported]);

  return {
    isSupported,
    permission: isSupported ? Notification.permission : 'denied',
    requestPermission,
    sendNotification,
    scheduleNotification,
    sendStudyReminder,
    sendTrainingReminder,
    sendPomodoroNotification,
    sendDailyGoalReminder,
    sendAchievementNotification
  };
};

export default useNotifications;