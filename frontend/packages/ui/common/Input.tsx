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
        fontSize={14}
        fontFamily="$body"
        color="$text"
        fontWeight="400"
      >
        {label}
      </Text>
      <TamaguiInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        backgroundColor="$card"
        borderWidth={1}
        borderColor="$border"
        borderRadius={9999}
        fontSize={14}
        fontFamily="$body"
        fontWeight="400"
        color="$text"
        // @ts-ignore - Tamagui color token type issue
        placeholderTextColor="$textSecondary"
        paddingHorizontal={20}
        paddingVertical={14}
        height={48}
        outlineWidth={0}
        focusStyle={{
          borderColor: "$primary",
          borderWidth: 2,
          outlineWidth: 0,
        }}
      />
    </YStack>
  );
};
