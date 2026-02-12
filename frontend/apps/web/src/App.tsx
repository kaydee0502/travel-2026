import { TamaguiProvider } from 'tamagui'
import { config } from '@travel/config'
import { 
  SignUpScreen, 
  OnboardingScreen
} from './screens'

function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <div style={{ 
        width: '100vw', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px 0'
      }}>
        {/* SignUp Screen */}
        <div style={{
          width: '100%',
          maxWidth: '430px',
          height: '492px',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '40px'
        }}>
          <SignUpScreen />
        </div>

        {/* Onboarding Screen */}
        <div style={{
          width: '100%',
          maxWidth: '430px',
          height: '632px',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          overflow: 'auto',
          position: 'relative'
        }}>
          <OnboardingScreen />
        </div>
      </div>
    </TamaguiProvider>
  )
}

export default App
