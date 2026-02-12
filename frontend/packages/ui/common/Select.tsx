import * as React from 'react';
import { YStack, XStack, Input as TamaguiInput, Text } from 'tamagui';

interface SelectProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  required?: boolean;
  error?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  required = false,
  error = false,
}) => {
  return (
    <YStack gap="$2" width="100%">
      <Text
        fontSize={10}
        fontFamily="$body"
        color="#000000"
        fontWeight="400"
      >
        {label}{required && '*'}
      </Text>
      <XStack
        borderWidth={1}
        borderColor={error ? '#B91C1C' : '#D3D3D3'}
        borderRadius={9999}
        paddingHorizontal="$4"
        paddingVertical="$2"
        alignItems="center"
        backgroundColor="#FFFFFF"
      >
        <TamaguiInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          backgroundColor="transparent"
          borderWidth={0}
          fontSize={10}
          fontFamily="$body"
          color="#171717"
          flex={1}
          paddingHorizontal={0}
          unstyled
        />
      </XStack>
    </YStack>
  );
};
