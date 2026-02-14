# Theme System Documentation

## Overview

The Travel 2026 app features a comprehensive dark/light theme system built with Tamagui and React Context.

## Features

- 🌓 **Light & Dark Themes**: Fully styled light and dark color schemes
- 💾 **Persistent Storage**: Theme preference saved to localStorage
- 🎨 **Tamagui Integration**: Seamless integration with Tamagui design tokens
- 🔄 **Easy Toggle**: Simple theme toggle component
- 📱 **Cross-Platform**: Works on both web and mobile (React Native)
- 🎯 **System Preference**: Respects user's system color scheme preference

## Installation

The theme system is already set up in the `@travel-2026/lib` package.

## Usage

### 1. Wrap Your App with ThemeProvider

```typescript
import { ThemeProvider } from '@travel-2026/lib';
import { TamaguiProvider } from 'tamagui';
import { config } from '@travel/config';

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <TamaguiProvider config={config} defaultTheme={theme}>
      {/* Your app content */}
    </TamaguiProvider>
  );
}
```

### 2. Use the Theme Hook

```typescript
import { useTheme } from '@travel-2026/lib';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <View>
      <Text>Current theme: {theme}</Text>
      <Button onPress={toggleTheme}>Toggle Theme</Button>
      <Button onPress={() => setTheme('dark')}>Set Dark</Button>
      <Button onPress={() => setTheme('light')}>Set Light</Button>
    </View>
  );
}
```

### 3. Use the ThemeToggle Component

```typescript
import { ThemeToggle } from '@travel/ui';

function Header() {
  return (
    <XStack>
      <Text>My App</Text>
      <ThemeToggle size="medium" />
    </XStack>
  );
}
```

**ThemeToggle Props:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)

## Theme Tokens

The following Tamagui tokens are available for use in your components:

### Colors

| Token | Light Theme | Dark Theme | Usage |
|-------|-------------|------------|-------|
| `$background` | `#FFFFFF` | `#121212` | Main background color |
| `$surface` | `#F5F5F5` | `#1E1E1E` | Surface/card backgrounds |
| `$primary` | `#3340CF` | `#5B6EFF` | Primary brand color |
| `$text` | `#000000` | `#FFFFFF` | Primary text color |
| `$textSecondary` | `#626262` | `#B0B0B0` | Secondary text color |
| `$border` | `#E0E0E0` | `#2C2C2C` | Border color |
| `$card` | `#FFFFFF` | `#1E1E1E` | Card background |
| `$shadowColor` | `rgba(0,0,0,0.16)` | `rgba(0,0,0,0.5)` | Shadow color |

### Using Theme Tokens

```typescript
import { View, Text } from 'tamagui';

function ThemedComponent() {
  return (
    <View backgroundColor="$background" borderColor="$border">
      <Text color="$text">Primary text</Text>
      <Text color="$textSecondary">Secondary text</Text>
      <Text color="$primary">Accent text</Text>
    </View>
  );
}
```

## API Reference

### ThemeProvider

```typescript
interface ThemeProviderProps {
  children: ReactNode;
  storageKey?: string; // default: 'app-theme'
}
```

### useTheme Hook

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

### ThemeToggle Component

```typescript
interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large'; // default: 'medium'
}
```

## Examples

### Example 1: Conditional Styling

```typescript
import { useTheme } from '@travel-2026/lib';

function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
      color: theme === 'dark' ? '#FFFFFF' : '#000000'
    }}>
      Content
    </div>
  );
}
```

### Example 2: Using Tamagui Tokens

```typescript
import { YStack, Text } from 'tamagui';

function Card() {
  return (
    <YStack
      backgroundColor="$card"
      borderColor="$border"
      borderWidth={1}
      padding="$4"
      borderRadius="$4"
    >
      <Text color="$text" fontSize={18} fontWeight="600">
        Card Title
      </Text>
      <Text color="$textSecondary" fontSize={14}>
        Card description
      </Text>
    </YStack>
  );
}
```

### Example 3: Theme Toggle in Header

```typescript
import { XStack, Text } from 'tamagui';
import { ThemeToggle } from '@travel/ui';

function AppHeader() {
  return (
    <XStack
      backgroundColor="$background"
      borderBottomColor="$border"
      borderBottomWidth={1}
      padding="$4"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color="$text" fontSize={20} fontWeight="700">
        My App
      </Text>
      <ThemeToggle size="small" />
    </XStack>
  );
}
```

## Best Practices

1. **Always use theme tokens** instead of hardcoded colors for consistency
2. **Test both themes** when developing new components
3. **Use semantic token names** (e.g., `$text` instead of `$black`)
4. **Respect user preferences** - the system automatically detects system theme preference
5. **Provide theme toggle** in an accessible location (e.g., settings or header)

## Troubleshooting

### Theme not persisting
- Check that localStorage is available in your environment
- Verify the `storageKey` prop if using a custom key

### Colors not updating
- Ensure you're using Tamagui tokens (`$background`) not hardcoded values
- Verify the component is wrapped in `TamaguiProvider` with the correct theme

### TypeScript errors
- Make sure `@types/react` is installed
- Verify Tamagui types are properly configured in `tamagui.config.ts`
