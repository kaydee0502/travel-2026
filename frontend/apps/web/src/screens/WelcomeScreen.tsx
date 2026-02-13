import React from 'react';
import { YStack, Text, View, XStack } from 'tamagui';
import { Button } from '@travel/ui';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onSkip: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onGetStarted,
  onSkip,
}) => {
  return (
    <View flex={1} backgroundColor="#FFFFFF">
      <YStack
        flex={1}
        paddingHorizontal="$4"
        paddingTop={80}
        paddingBottom="$8"
        justifyContent="flex-start"
        alignItems="center"
        gap="$6"
      >
        {/* Header */}
        <YStack gap="$2" alignItems="center">
          <XStack gap={0} alignItems="center" justifyContent="center" flexWrap="wrap">
            <Text
              fontSize={24}
              fontFamily="$body"
              fontWeight="700"
              color="#3340CF"
              textAlign="center"
            >
              Truly
            </Text>
            <Text
              fontSize={24}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
              textAlign="center"
            >
              {' '}Personalised Travel
            </Text>
          </XStack>
        </YStack>

        {/* Description */}
        <YStack gap="$2" alignItems="center" paddingHorizontal="$6">
          <Text
            fontSize={14}
            fontFamily="$body"
            fontWeight="400"
            color="#000000"
            textAlign="center"
          >
            To curate a personalised experience with
          </Text>
          <Text
            fontSize={14}
            fontFamily="$body"
            fontWeight="400"
            color="#000000"
            textAlign="center"
          >
            us, we'd like to ask some questions
          </Text>
          <Text
            fontSize={14}
            fontFamily="$body"
            fontWeight="400"
            color="#000000"
            textAlign="center"
          >
            about you travel preferences.
          </Text>
        </YStack>

        {/* Get Started Button */}
        <YStack width="100%" paddingHorizontal="$4" gap="$4">
          <Button onPress={onGetStarted} variant="primary">
            Get Started
          </Button>

          {/* Skip Link */}
          <Text
            fontSize={14}
            fontFamily="$body"
            fontWeight="400"
            color="#3340CF"
            textAlign="center"
            onPress={onSkip}
            cursor="pointer"
          >
            Skip and share later
          </Text>
        </YStack>
      </YStack>
    </View>
  );
};
