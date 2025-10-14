import { useState, useEffect } from 'react';

const TOUR_STORAGE_KEY = 'hasSeenTour';

export function useTour() {
  const [run, setRun] = useState<boolean>(false);

  useEffect(() => {
    // Only run for new users who haven't seen the tour before
    const userData = localStorage.getItem('userData');
    if (userData) {
      try {
        const { isNewUser } = JSON.parse(userData);
        if (isNewUser) {
          const hasSeenTour = localStorage.getItem(TOUR_STORAGE_KEY) === 'true';
          setRun(!hasSeenTour);
        }
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }, []);

  const completeTour = () => {
    setRun(false);
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  };

  const restartTour = () => {
    setRun(true);
    // Scroll to top when restarting the tour
    window.scrollTo(0, 0);
  };

  return {
    run,
    completeTour,
    restartTour,
  };
}
