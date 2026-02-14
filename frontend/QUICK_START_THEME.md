# 🎨 Quick Start: Theme System

## 🚀 How to Use the Theme Toggle

The theme system is already integrated! Here's what you need to know:

### 1️⃣ Add Theme Toggle to Any Screen

```typescript
import { ThemeToggle } from '@travel/ui';

function MyScreen() {
  return (
    <View>
      <ThemeToggle size="medium" />
      {/* Your content */}
    </View>
  );
}
```

### 2️⃣ Use Theme Tokens in Components

Instead of hardcoded colors, use Tamagui theme tokens:

```typescript
// ❌ DON'T do this
<View backgroundColor="#FFFFFF">
  <Text color="#000000">Hello</Text>
</View>

// ✅ DO this
<View backgroundColor="$background">
  <Text color="$text">Hello</Text>
</View>
```

### 3️⃣ Available Theme Tokens

| Token | Usage |
|-------|-------|
| `$background` | Main background |
| `$surface` | Cards, surfaces |
| `$primary` | Brand color, CTAs |
| `$text` | Primary text |
| `$textSecondary` | Secondary text |
| `$border` | Borders, dividers |
| `$card` | Card backgrounds |
| `$shadowColor` | Shadows |

### 4️⃣ Access Theme Programmatically

```typescript
import { useTheme } from '@travel-2026/lib';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  // Check current theme
  if (theme === 'dark') {
    // Do something for dark mode
  }
  
  // Toggle theme
  toggleTheme();
  
  // Set specific theme
  setTheme('dark');
  setTheme('light');
}
```

## 🎯 Already Implemented

✅ Theme toggle on TripsScreen (top-right corner)  
✅ BottomNav supports themes  
✅ Both web and mobile apps configured  
✅ Persistent storage (saves preference)  
✅ System preference detection  

## 📝 To Add Theme to a New Component

1. Replace hardcoded colors with theme tokens
2. Optionally add `<ThemeToggle />` where appropriate

That's it! The theme will automatically apply.

## 🎨 Theme Toggle Sizes

```typescript
<ThemeToggle size="small" />   // Compact (44x24)
<ThemeToggle size="medium" />  // Default (56x28)
<ThemeToggle size="large" />   // Large (68x34)
```

## 💡 Pro Tips

- Always use `$` prefix for theme tokens: `$background`, `$text`, etc.
- Test your components in both light and dark modes
- The theme persists across app restarts automatically
- Theme preference is stored in localStorage with key `'app-theme'`

## 📚 Full Documentation

- **Complete Guide**: `/packages/lib/THEME.md`
- **Implementation Details**: `/THEME_IMPLEMENTATION.md`
- **Library Docs**: `/packages/lib/README.md`

---

**Happy theming! 🌓**
