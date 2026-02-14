import { createTamagui, createFont, createTokens } from 'tamagui'
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

const tokens = createTokens({
  ...defaultConfig.tokens,
  color: {
    ...defaultConfig.tokens.color,
    // Light theme colors
    lightBackground: '#FFFFFF',
    lightSurface: '#F5F5F5',
    lightPrimary: '#3340CF',
    lightText: '#000000',
    lightTextSecondary: '#626262',
    lightBorder: '#E0E0E0',
    lightCard: '#FFFFFF',
    
    // Dark theme colors
    darkBackground: '#121212',
    darkSurface: '#1E1E1E',
    darkPrimary: '#5B6EFF',
    darkText: '#FFFFFF',
    darkTextSecondary: '#B0B0B0',
    darkBorder: '#2C2C2C',
    darkCard: '#1E1E1E',
  },
})

export const config = createTamagui({
  ...defaultConfig,
  fonts: {
    heading: sourceSansProFont,
    body: sourceSansProFont,
  },
  tokens,
  themes: {
    light: {
      background: tokens.color.lightBackground,
      surface: tokens.color.lightSurface,
      primary: tokens.color.lightPrimary,
      text: tokens.color.lightText,
      textSecondary: tokens.color.lightTextSecondary,
      border: tokens.color.lightBorder,
      card: tokens.color.lightCard,
      color: tokens.color.lightText,
      shadowColor: 'rgba(0, 0, 0, 0.16)',
    },
    dark: {
      background: tokens.color.darkBackground,
      surface: tokens.color.darkSurface,
      primary: tokens.color.darkPrimary,
      text: tokens.color.darkText,
      textSecondary: tokens.color.darkTextSecondary,
      border: tokens.color.darkBorder,
      card: tokens.color.darkCard,
      color: tokens.color.darkText,
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    },
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
