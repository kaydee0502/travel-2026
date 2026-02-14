import { useState } from 'react'
import { TamaguiProvider } from 'tamagui'
import { config } from '@travel/config'
import { ThemeProvider, useTheme } from '@travel-2026/lib'
import { 
  SignUpScreen, 
  WelcomeScreen,
  OnboardingScreen,
  PreferencesScreen,
  TripsScreen
} from './screens'

type Screen = 'signup' | 'onboarding' | 'welcome' | 'preferences' | 'trips';

function AppContent() {
  const { theme } = useTheme();
  const [currentScreen, setCurrentScreen] = useState<Screen>('signup');

  // Navigation Flow:
  // SignUp (auth/oauth) -> Onboarding -> Welcome -> Preferences -> Trips

  const handleAuthSuccess = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingNext = () => {
    setCurrentScreen('welcome');
  };

  const handleWelcomeGetStarted = () => {
    setCurrentScreen('preferences');
  };

  const handleWelcomeSkip = () => {
    setCurrentScreen('trips');
  };

  const handlePreferencesSubmit = () => {
    setCurrentScreen('trips');
  };

  const handlePreferencesSkip = () => {
    setCurrentScreen('trips');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'signup':
        return <SignUpScreen onAuthSuccess={handleAuthSuccess} />;
      case 'onboarding':
        return <OnboardingScreen onNext={handleOnboardingNext} />;
      case 'welcome':
        return <WelcomeScreen onGetStarted={handleWelcomeGetStarted} onSkip={handleWelcomeSkip} />;
      case 'preferences':
        return <PreferencesScreen onSubmit={handlePreferencesSubmit} onSkip={handlePreferencesSkip} />;
      case 'trips':
        return <TripsScreen />;
      default:
        return <SignUpScreen onAuthSuccess={handleAuthSuccess} />;
    }
  };

  return (
    <TamaguiProvider config={config} defaultTheme={theme}>
      <div style={{ 
        width: '100vw', 
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? '#0A0A0A' : '#f5f5f5',
        fontFamily: 'SourceSansPro_400Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        {/* Mobile viewport container */}
        <div style={{
          width: '100%',
          maxWidth: '430px',
          height: '100%',
          maxHeight: '932px',
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
          boxShadow: theme === 'dark' ? '0 0 20px rgba(0,0,0,0.5)' : '0 0 20px rgba(0,0,0,0.1)',
          overflow: 'auto',
          position: 'relative'
        }}>
          {renderScreen()}
        </div>
      </div>
    </TamaguiProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
