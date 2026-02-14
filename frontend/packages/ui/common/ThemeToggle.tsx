import * as React from 'react';
import { XStack, Text, View } from 'tamagui';
import { useTheme } from '@travel-2026/lib';

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ size = 'medium' }) => {
  const { theme, toggleTheme } = useTheme();
  
  const sizes = {
    small: { width: 44, height: 24, padding: 2, iconSize: 16 },
    medium: { width: 56, height: 28, padding: 2, iconSize: 20 },
    large: { width: 68, height: 34, padding: 3, iconSize: 24 },
  };
  
  const { width, height, padding, iconSize } = sizes[size];
  const isDark = theme === 'dark';

  return (
    <XStack
      width={width}
      height={height}
      backgroundColor={isDark ? '#2C2C2C' : '#E0E0E0'}
      borderRadius={height / 2}
      padding={padding}
      alignItems="center"
      justifyContent={isDark ? 'flex-end' : 'flex-start'}
      onPress={toggleTheme}
      cursor="pointer"
      pressStyle={{ opacity: 0.8 }}
      animation="quick"
    >
      <View
        width={height - padding * 2}
        height={height - padding * 2}
        backgroundColor={isDark ? '#5B6EFF' : '#3340CF'}
        borderRadius={(height - padding * 2) / 2}
        alignItems="center"
        justifyContent="center"
        animation="quick"
      >
        <Text fontSize={iconSize * 0.7}>
          {isDark ? '🌙' : '☀️'}
        </Text>
      </View>
    </XStack>
  );
};
