import { TamaguiProvider } from 'tamagui'
import { config } from '@travel/config'
import { TripsScreen } from './screens/TripsScreen'
import { SignUpScreen } from './screens'

export default function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <SignUpScreen />
    </TamaguiProvider>
  )
}
