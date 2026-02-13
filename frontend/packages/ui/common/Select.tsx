import * as React from 'react';
import { YStack, Input as TamaguiInput, Text } from 'tamagui';

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
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <YStack gap="$2" width="100%">
      <Text
        fontSize={14}
        fontFamily="$body"
        color="#000000"
        fontWeight="400"
      >
        {label}{required && '*'}
      </Text>
      <TamaguiInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        backgroundColor="#FFFFFF"
        borderWidth={isFocused ? 2 : 1}
        borderColor={error ? '#B91C1C' : isFocused ? '#3340CF' : '#E5E5E5'}
        borderRadius={9999}
        fontSize={14}
        fontFamily="$body"
        fontWeight="400"
        color="#000000"
        // @ts-ignore - Tamagui color token type issue
        placeholderTextColor="#9CA3AF"
        paddingHorizontal={20}
        paddingVertical={14}
        height={48}
        outlineWidth={0}
        focusStyle={{
          borderColor: error ? '#B91C1C' : '#3340CF',
          borderWidth: 2,
          outlineWidth: 0,
        }}
      />
    </YStack>
  );
};
