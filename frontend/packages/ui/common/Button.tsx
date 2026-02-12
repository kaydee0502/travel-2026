import * as React from 'react';
import { Button as TamaguiButton, Text } from 'tamagui';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  variant = 'primary',
  icon,
  disabled = false,
}) => {
  const isPrimary = variant === 'primary';

  return (
    <TamaguiButton
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      backgroundColor={
        disabled
          ? '#C1C1C1'
          : isPrimary
          ? '#3340CF'
          : '#FFFFFF'
      }
      borderWidth={isPrimary ? 0 : 1}
      borderColor={
        disabled
          ? '#C1C1C1'
          : isPrimary
          ? 'transparent'
          : '#7F7F7F'
      }
      borderRadius="$8"
      paddingVertical="$3"
      paddingHorizontal="$4"
      width="100%"
      shadowColor={disabled ? 'transparent' : isPrimary ? 'rgba(3, 3, 3, 0.1)' : 'rgba(0, 0, 0, 0.08)'}
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={disabled ? 0 : 1}
      shadowRadius={disabled ? 0 : isPrimary ? 10 : 0}
      elevation={disabled ? 0 : isPrimary ? 5 : 0}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="$2"
      unstyled
      opacity={disabled ? 0.6 : 1}
      pressStyle={{
        opacity: disabled ? 0.6 : 0.8,
      }}
    >
      {icon}
      <Text
        fontSize={isPrimary ? 14 : 12}
        fontFamily="$body"
        color={
          disabled
            ? '#7F7F7F'
            : isPrimary
            ? '#FFFFFF'
            : variant === 'outline'
            ? '#000000'
            : '#262626'
        }
        fontWeight="400"
      >
        {children}
      </Text>
    </TamaguiButton>
  );
};
