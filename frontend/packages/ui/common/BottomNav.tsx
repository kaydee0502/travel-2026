import * as React from 'react';
import { XStack, YStack, Text, View } from 'tamagui';
import { Image } from 'react-native';

interface NavItem {
  label: string;
  icon?: any;
  active?: boolean;
}

interface BottomNavProps {
  activeTab?: string;
  onTabPress?: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab = 'Trips', onTabPress }) => {
  const navItems: NavItem[] = [
    { label: 'Explore' },
    { label: 'Near Me' },
    { label: 'Trips' },
    { label: 'My world' },
    { label: 'Profile' },
  ];

  return (
    <XStack
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      height={54}
      backgroundColor="#FFFFFF"
      shadowColor="rgba(0, 0, 0, 0.16)"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={1}
      shadowRadius={8}
      elevation={5}
      paddingHorizontal="$4"
      paddingVertical="$2"
      justifyContent="space-around"
      alignItems="center"
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
          <View width={20} height={20} />
          <Text
            fontSize={8}
            fontFamily="$body"
            fontWeight="400"
            color={activeTab === item.label ? '#3340CF' : '#626262'}
          >
            {item.label}
          </Text>
        </YStack>
      ))}
    </XStack>
  );
};
