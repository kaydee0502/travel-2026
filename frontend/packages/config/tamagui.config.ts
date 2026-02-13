import { createTamagui, createFont } from 'tamagui'
import { config as defaultConfig } from '@tamagui/config'

const sourceSansProFont = createFont({
  family: 'SourceSansPro_400Regular',
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 28,
    9: 32,
    10: 40,
  },
  lineHeight: {
    1: 14,
    2: 16,
    3: 20,
    4: 22,
    5: 24,
    6: 28,
    7: 32,
    8: 36,
    9: 40,
    10: 48,
  },
  weight: {
    1: '400',
    4: '400',
    6: '600',
    7: '700',
  },
  letterSpacing: {
    1: 0,
    4: 0,
    7: -0.5,
  },
  face: {
    400: { normal: 'SourceSansPro_400Regular' },
    600: { normal: 'SourceSansPro_600SemiBold' },
    700: { normal: 'SourceSansPro_700Bold' },
  },
})

export const config = createTamagui({
  ...defaultConfig,
  fonts: {
    heading: sourceSansProFont,
    body: sourceSansProFont,
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
