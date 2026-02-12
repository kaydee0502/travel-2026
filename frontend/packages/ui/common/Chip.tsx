import * as React from 'react';
import { XStack, Text } from 'tamagui';

interface ChipProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, selected, onPress }) => {
  return (
    <XStack
      onPress={onPress}
      backgroundColor={selected ? '#3340CF' : '#FFFFFF'}
      borderWidth={1}
      borderColor={selected ? '#3340CF' : '#030303'}
      borderRadius="$8"
      paddingHorizontal="$3"
      paddingVertical="$2"
      cursor="pointer"
      pressStyle={{
        opacity: 0.8,
      }}
    >
      <Text
        fontSize={14}
        fontFamily="$body"
        fontWeight="400"
        color={selected ? '#FFFFFF' : '#030303'}
      >
        {label}
      </Text>
    </XStack>
  );
};
