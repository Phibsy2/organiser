import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTimerOptions {
  initialTime: number; // in seconds
  interval?: number; // update interval in milliseconds
  onComplete?: () => void;
  onTick?: (timeRemaining: number) => void;
  autoStart?: boolean;
  countdown?: boolean;
}

interface UseTimerReturn {
  time: number;
  isRunning: boolean;
  isPaused: boolean;
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: (newTime?: number) => void;
  toggle: () => void;
  setTime: (time: number) => void;
}

const useTimer = ({
  initialTime,
  interval = 1000,
  onComplete,
  onTick,
  autoStart = false,
  countdown = true
}: UseTimerOptions): UseTimerReturn => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isPaused, setIsPaused] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0);

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle timer logic
  useEffect(() => {
    if (isRunning && !isPaused) {
      if (startTimeRef.current === null) {
        startTimeRef.current = Date.now() - pausedTimeRef.current;
      }

      intervalRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTimeRef.current!) / 1000);
        const newTime = countdown 
          ? Math.max(0, initialTime - elapsed)
          : elapsed;

        setTime(newTime);

        if (onTick) {
          onTick(newTime);
        }

        if (countdown && newTime === 0) {
          setIsRunning(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          if (onComplete) {
            onComplete();
          }
        }
      }, interval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (isPaused && startTimeRef.current !== null) {
        pausedTimeRef.current = Date.now() - startTimeRef.current;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused, countdown, initialTime, interval, onComplete, onTick]);

  const start = useCallback(() => {
    setIsRunning(true);
    setIsPaused(false);
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
  }, []);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  const reset = useCallback((newTime?: number) => {
    setTime(newTime ?? initialTime);
    setIsRunning(false);
    setIsPaused(false);
    startTimeRef.current = null;
    pausedTimeRef.current = 0;
  }, [initialTime]);

  const toggle = useCallback(() => {
    if (isRunning) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else {
      start();
    }
  }, [isRunning, isPaused, start, pause, resume]);

  const setTimeManual = useCallback((newTime: number) => {
    setTime(newTime);
    if (isRunning) {
      const elapsed = countdown ? initialTime - newTime : newTime;
      startTimeRef.current = Date.now() - (elapsed * 1000);
      pausedTimeRef.current = 0;
    }
  }, [countdown, initialTime, isRunning]);

  return {
    time,
    isRunning,
    isPaused,
    start,
    pause,
    resume,
    reset,
    toggle,
    setTime: setTimeManual
  };
};

export default useTimer;