import React, { useState } from 'react';
import { YStack, XStack, Text, View, Image } from 'tamagui';
import { Input, Button, Divider, ThemeToggle } from '@travel/ui';

// Import images - we'll need to add these to web assets
import googleIcon from '../assets/oauth/google.png';
import appleIcon from '../assets/oauth/apple.png';

interface SignUpScreenProps {
  onAuthSuccess?: () => void;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    console.log('Continue with email:', email);
    onAuthSuccess?.();
  };

  const handleGoogleSignUp = () => {
    console.log('Sign up with Google');
    onAuthSuccess?.();
  };

  const handleAppleSignUp = () => {
    console.log('Sign up with Apple');
    onAuthSuccess?.();
  };

  const handleSignIn = () => {
    console.log('Navigate to Sign In');
  };

  return (
    <View flex={1} backgroundColor="$primary">
      {/* Theme Toggle - Top Right */}
      <View position="absolute" top="$4" right="$4" zIndex={100}>
        <ThemeToggle size="small" />
      </View>
      
      {/* Main Container */}
      <YStack
        flex={1}
        position="relative"
      >
        {/* White Card Container */}
        <YStack
          position="absolute"
          top="37.36%"
          left={0}
          right={0}
          bottom={0}
          backgroundColor="$card"
          borderTopLeftRadius="$8"
          borderTopRightRadius="$8"
          shadowColor="$shadowColor"
          shadowOffset={{ width: 0, height: 0 }}
          shadowOpacity={1}
          shadowRadius={0}
          paddingHorizontal="$4"
          paddingTop="$6"
        >
          {/* Header */}
          <YStack gap="$2" marginBottom="$4">
            <Text
              fontSize={18}
              fontFamily="$body"
              fontWeight="700"
              color="$text"
            >
              Create an account
            </Text>
            <XStack gap="$1">
              <Text
                fontSize={10}
                fontFamily="$body"
                fontWeight="400"
                color="$text"
              >
                Already a member?
              </Text>
              <Text
                fontSize={10}
                fontFamily="$body"
                fontWeight="600"
                color="$primary"
                onPress={handleSignIn}
                cursor="pointer"
              >
                Sign in
              </Text>
            </XStack>
          </YStack>

          {/* Input Fields */}
          <YStack gap="$4" marginBottom="$4">
            <Input
              label="Your Email Address"
              placeholder="Karatravels@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Your Password"
              placeholder="****************"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </YStack>

          {/* Continue Button */}
          <YStack marginBottom="$4">
            <Button
              onPress={handleContinue}
              variant="primary"
              disabled={!email.trim() || !password.trim()}
            >
              Continue
            </Button>
          </YStack>

          {/* Divider */}
          <YStack marginBottom="$4">
            <Divider />
          </YStack>

          {/* Social Sign Up Buttons */}
          <YStack gap="$3">
            <Button
              onPress={handleGoogleSignUp}
              variant="outline"
              icon={
                <Image
                  source={{ uri: googleIcon }}
                  width={16}
                  height={16}
                />
              }
            >
              Sign up with Google
            </Button>
            <Button
              onPress={handleAppleSignUp}
              variant="outline"
              icon={
                <Image
                  source={{ uri: appleIcon }}
                  width={16}
                  height={16}
                />
              }
            >
              Sign up with Apple
            </Button>
          </YStack>
        </YStack>
      </YStack>
    </View>
  );
};
