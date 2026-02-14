import { useState } from 'react'
import { TamaguiProvider, YStack, Text } from 'tamagui'
import { config } from '@travel/config'
import { ThemeProvider, useTheme } from '@travel-2026/lib'
import { 
  SignUpScreen, 
  WelcomeScreen, 
  OnboardingScreen, 
  PreferencesScreen, 
  TripsScreen 
} from './screens'
import { useFonts, SourceSansPro_400Regular, SourceSansPro_600SemiBold, SourceSansPro_700Bold } from '@expo-google-fonts/source-sans-pro'

type Screen = 'signup' | 'onboarding' | 'welcome' | 'preferences' | 'trips';

function AppContent() {
  const { theme } = useTheme();
  const [currentScreen, setCurrentScreen] = useState<Screen>('signup');
  
  const [fontsLoaded] = useFonts({
    'SourceSansPro_400Regular': SourceSansPro_400Regular,
    'SourceSansPro_600SemiBold': SourceSansPro_600SemiBold,
    'SourceSansPro_700Bold': SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

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
      <YStack flex={1}>
        {renderScreen()}
      </YStack>
    </TamaguiProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
