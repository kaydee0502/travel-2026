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
      backgroundColor={selected ? '$primary' : '$card'}
      borderWidth={1}
      borderColor={selected ? '$primary' : '$text'}
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
        color={selected ? '#FFFFFF' : '$text'}
      >
        {label}
      </Text>
    </XStack>
  );
};
