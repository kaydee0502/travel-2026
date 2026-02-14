import * as React from 'react';
import { XStack, YStack, Text, View, useTheme } from 'tamagui';
import { Image } from 'react-native';

interface NavItem {
  label: string;
  icon: string;
  active?: boolean;
}

interface BottomNavProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'Trips', onTabPress }) => {
  const theme = useTheme();
  const navItems: NavItem[] = [
    { label: 'Explore', icon: '🔍' },
    { label: 'Near Me', icon: '📍' },
    { label: 'Trips', icon: '🗺️' },
    { label: 'My world', icon: '🌍' },
    { label: 'Profile', icon: '👤' },
  ];

  return (
    <XStack
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={54}
      backgroundColor="$card"
      shadowColor="$shadowColor"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={1}
      shadowRadius={8}
      elevation={5}
      paddingHorizontal="$4"
      paddingVertical="$2"
      justifyContent="space-around"
      alignItems="center"
      borderTopWidth={1}
      borderTopColor="$border"
    >
      {navItems.map((item) => (
        <YStack
          key={item.label}
          alignItems="center"
          gap="$1"
          onPress={() => onTabPress?.(item.label)}
          cursor="pointer"
          pressStyle={{ opacity: 0.7 }}
        >
          <Text
            fontSize={20}
            style={{ opacity: activeTab === item.label ? 1 : 0.6 }}
          >
            {item.icon}
          </Text>
          <Text
            fontSize={8}
            fontFamily="$body"
            fontWeight="400"
            color={activeTab === item.label ? '$primary' : '$textSecondary'}
          >
            {item.label}
          </Text>
        </YStack>
      ))}
    </XStack>
  );
};
