import { useEffect, useState } from 'react';

type TourStep = {
  id: string;
  title: string;
  content: string;
  target: string;
};

type TourProps = {
  run: boolean;
  onComplete: () => void;
};

const TOUR_STORAGE_KEY = 'hasSeenTour';

export function AppTour({ run, onComplete }: TourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const steps: TourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to TrustPay!',
      content: 'Let us show you around the dashboard.',
      target: 'body',
    },
    {
      id: 'navigation',
      title: 'Navigation Menu',
      content: 'Use this menu to navigate between different sections of the application.',
      target: 'nav',
    },
    {
      id: 'dashboard',
      title: 'Dashboard Overview',
      content: 'Get a quick summary of your key metrics and statistics here.',
      target: '.dashboard-stats',
    },
    {
      id: 'charts',
      title: 'Data Visualization',
      content: 'Interactive charts to help you visualize your data trends and patterns.',
      target: '.chart-container',
    },
    {
      id: 'data',
      title: 'Data Management',
      content: 'Search, sort, and filter your records using the table controls.',
      target: '.data-table',
    },
    {
      id: 'theme',
      title: 'Theme Customization',
      content: 'Switch between light and dark mode based on your preference.',
      target: '.theme-toggle',
    },
  ];

  useEffect(() => {
    // Check for dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (run) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [run]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    setCurrentStep(0);
    onComplete();
    localStorage.setItem(TOUR_STORAGE_KEY, 'true');
  };

  if (!run || currentStep >= steps.length) return null;

  const current = steps[currentStep];
  const targetElement = document.querySelector(current.target);
  const rect = targetElement?.getBoundingClientRect();

  const style: React.CSSProperties = {
    position: 'fixed',
    zIndex: 10000,
    backgroundColor: isDarkMode ? '#1e293b' : '#fff',
    color: isDarkMode ? '#f8fafc' : '#1e293b',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    maxWidth: '320px',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  };

  if (rect) {
    // Position the tooltip near the target element
    style.top = `${rect.bottom + window.scrollY + 10}px`;
    style.left = `${rect.left + window.scrollX}px`;
  } else {
    // Center if target not found
    style.top = '50%';
    style.left = '50%';
    style.transform = 'translate(-50%, -50%)';
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9999]" onClick={handleSkip} />
      <div style={style} className="z-[10000]">
        <h3 className="font-bold text-lg mb-2">{current.title}</h3>
        <p className="mb-4">{current.content}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Skip Tour
          </button>
          <div className="space-x-2">
            <span className="text-sm text-gray-500">
              {currentStep + 1} / {steps.length}
            </span>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
