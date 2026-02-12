# Travel 2026 - Cross-Platform Travel Application

A truly personalized travel planning application built with React Native (Expo) for mobile and React (Vite) for web, sharing UI components via Tamagui in a monorepo architecture.

---

## 🏗️ Architecture Overview

This project uses a **monorepo structure** with npm workspaces to share code between mobile and web applications while maintaining a single source of truth for UI components and configurations.

```
travel-2026/
├── backend/                    # Backend services (separate)
└── frontend/                   # Frontend monorepo root
    ├── apps/
    │   ├── mobile/            # 📱 Expo React Native app
    │   └── web/               # 🌐 React Vite app
    ├── packages/
    │   ├── ui/                # 🎨 Shared Tamagui UI components
    │   └── config/            # ⚙️ Shared Tamagui configuration
    ├── node_modules/          # Hoisted dependencies (single instance)
    └── package.json           # Workspace root configuration
```

---

## 📦 Monorepo Structure

### **Root Configuration** (`frontend/package.json`)
```json
{
  "name": "travel-2026",
  "private": true,
  "workspaces": ["apps/*", "packages/*"],
  "resolutions": {
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

**Purpose:**
- Defines workspace boundaries
- Ensures single React instance across all apps
- Manages dependency hoisting

---

## 📱 Mobile App (`apps/mobile/`)

**Tech Stack:**
- Expo SDK ~54.0
- React Native 0.81.5
- React 19.1.0
- Tamagui 2.0.0-rc.11
- Metro bundler with Tamagui plugin

**Key Files:**
- `App.tsx` - Main application entry
- `metro.config.js` - Metro bundler configuration with Tamagui support
- `screens/` - All mobile screens

**Run Commands:**
```bash
cd frontend/apps/mobile
npm start          # Start Expo dev server
npm run android    # Run on Android
npm run ios        # Run on iOS
```

---

## 🌐 Web App (`apps/web/`)

**Tech Stack:**
- Vite 7.3.1
- React 19.1.0
- React DOM 19.1.0
- Tamagui 2.0.0-rc.11
- TypeScript 5.9.3

**Key Files:**
- `src/App.tsx` - Main application component
- `vite.config.ts` - Vite configuration with Tamagui plugin
- `src/screens/` - All web screens (ported from mobile)

**Run Commands:**
```bash
cd frontend/apps/web
npm run dev        # Start dev server (http://localhost:5174)
npm run build      # Production build
npm run preview    # Preview production build
```

---

## 🎨 Shared UI Package (`packages/ui/`)

**Purpose:** Reusable UI components used by both mobile and web apps

**Components:**
- `Button` - Primary & outline variants
- `Input` - Text input with labels
- `Select` - Dropdown/input field
- `Chip` - Selectable preference chips
- `Divider` - Visual separator
- `BottomNav` - Bottom navigation bar

**Package Configuration:**
```json
{
  "name": "@travel/ui",
  "main": "common/index.ts",
  "dependencies": {
    "tamagui": "^2.0.0-rc.11"
  }
}
```

**Usage in Apps:**
```typescript
import { Button, Input, Chip } from '@travel/ui';
```

---

## ⚙️ Shared Config Package (`packages/config/`)

**Purpose:** Centralized Tamagui configuration for consistent theming

**Files:**
- `tamagui.config.ts` - Tamagui theme configuration
- `package.json` - Package definition

**Configuration:**
```typescript
import { createTamagui } from 'tamagui'
import { config as defaultConfig } from '@tamagui/config'

export const config = createTamagui(defaultConfig)
```

**Usage in Apps:**
```typescript
import { config } from '@travel/config';

<TamaguiProvider config={config} defaultTheme="light">
  {/* Your app */}
</TamaguiProvider>
```

---

## 🎯 Key Features

### ✅ **Shared Components**
Both mobile and web apps use the exact same UI components from `@travel/ui`, ensuring:
- Consistent user experience
- Single source of truth for UI
- Easier maintenance and updates

### ✅ **Single Tamagui Instance**
- All dependencies hoisted to `frontend/node_modules/`
- No duplicate React or Tamagui instances
- Resolves "Invalid Hook Call" errors

### ✅ **TypeScript Support**
- Full type safety across all packages
- Shared type definitions
- IntelliSense support

### ✅ **Hot Module Replacement (HMR)**
- Fast refresh on both mobile (Expo) and web (Vite)
- Instant feedback during development

---

## 📱 Screens

All screens are implemented in both mobile and web:

1. **SignUpScreen** - Email/password signup with OAuth options
2. **WelcomeScreen** - Onboarding welcome screen
3. **OnboardingScreen** - User profile setup form
4. **PreferencesScreen** - Travel preferences selection
5. **TripsScreen** - Main trips view with navigation

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.17.0+ (20.19.4+ recommended)
- npm 11.6.2+

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/kaydee0502/travel-2026
cd travel-2026
```

2. **Install dependencies** (from frontend root)
```bash
cd frontend
npm install
```

This will:
- Install all dependencies for both apps
- Hoist shared dependencies to root `node_modules/`
- Link workspace packages (`@travel/ui`, `@travel/config`)

3. **Run the apps**

**Mobile:**
```bash
cd apps/mobile
npm start
```

**Web:**
```bash
cd apps/web
npm run dev
```

---

## 🔧 Development Workflow

### Adding a New UI Component

1. Create component in `packages/ui/common/`
```typescript
// packages/ui/common/MyComponent.tsx
import * as React from 'react';
import { View, Text } from 'tamagui';

export const MyComponent = () => {
  return <View><Text>Hello</Text></View>;
};
```

2. Export from `packages/ui/common/index.ts`
```typescript
export { MyComponent } from './MyComponent';
```

3. Use in any app
```typescript
import { MyComponent } from '@travel/ui';
```

### Updating Dependencies

Always install from the **frontend root**:
```bash
cd frontend
npm install <package-name>
```

Never install directly in `apps/mobile` or `apps/web` to avoid duplicate dependencies.

---

## 🐛 Troubleshooting

### "Invalid Hook Call" Error
**Cause:** Multiple React instances

**Fix:**
```bash
cd frontend
rm -rf node_modules apps/*/node_modules package-lock.json apps/*/package-lock.json
npm install
```

### Metro Bundler Issues
**Fix:**
```bash
cd apps/mobile
npx expo start --clear
```

### Vite Build Issues
**Fix:**
```bash
cd apps/web
rm -rf node_modules/.vite
npm run dev
```

---

## 📊 Project Statistics

- **Total Screens:** 5
- **Shared Components:** 6
- **Platforms:** 2 (iOS/Android via Expo, Web via Vite)
- **Packages:** 990+ npm packages
- **Lines of Code:** ~1,500+ (excluding node_modules)

---

## 🎨 Design System

**Color Palette:**
- Primary: `#3340CF` (Blue)
- Background: `#FFFFFF` (White)
- Text: `#000000` (Black)
- Border: `#E6E6E6` (Light Gray)
- Placeholder: `#D3D3D3` (Gray)

**Typography:**
- Font Family: System default
- Sizes: 10px, 12px, 14px, 16px, 18px, 24px

---

## 📝 Notes

- **Node Version Warning:** Some packages require Node.js 20.19.4+. Current version (20.17.0) works but may show warnings.
- **Expo Compatibility:** Ensure Expo CLI is up to date for best mobile development experience.
- **Tamagui Version:** Using RC version (2.0.0-rc.11) - stable but pre-release.

---

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes in appropriate workspace
3. Test on both mobile and web
4. Submit pull request

---

## 📄 License

[Your License Here]

---

## 👥 Team

[Your Team Information]

---

**Built with ❤️ using Tamagui, Expo, and Vite**
