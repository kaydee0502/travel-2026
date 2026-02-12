import * as React from 'react';
import { YStack, Input as TamaguiInput, Text } from 'tamagui';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <YStack gap="$2" width="100%">
      <Text
        fontSize={10}
        fontFamily="$body"
        color="#000000"
        fontWeight="400"
      >
        {label}
      </Text>
      <TamaguiInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        backgroundColor="#FFFFFF"
        borderWidth={0}
        borderRadius="$6"
        fontSize={10}
        fontFamily="$body"
        color="#000000"
        paddingHorizontal="$3"
        paddingVertical="$3"
        shadowColor="rgba(0, 0, 0, 0.08)"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={1}
        shadowRadius={4}
      />
    </YStack>
  );
};
