import React, { useState } from 'react';
import { YStack, XStack, Text, View } from 'tamagui';
import { Select, Button } from '@travel/ui';

interface OnboardingScreenProps {
  onNext?: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNext }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const handleNext = () => {
    console.log('Next with data:', { name, phone, country, gender, nationality });
    onNext?.();
  };

  const isFormValid = name.trim() && phone.trim() && country.trim();

  return (
    <View flex={1} backgroundColor="$background">
      <YStack
        flex={1}
        paddingHorizontal="$4"
        paddingTop="$8"
      >
        {/* Header */}
        <YStack gap="$3" marginBottom="$6" alignItems="center">
          <XStack gap={0} alignItems="center" justifyContent="center" flexWrap="wrap">
            <Text
              fontSize={24}
              fontFamily="$body"
              fontWeight="400"
              color="$primary"
              textAlign="center"
            >
              Let's get{' '}
            </Text>
            <Text
              fontSize={24}
              fontFamily="$body"
              fontWeight="700"
              color="$primary"
              textAlign="center"
            >
              you
            </Text>
            <Text
              fontSize={24}
              fontFamily="$body"
              fontWeight="400"
              color="$primary"
              textAlign="center"
            >
              {' '}setup!
            </Text>
          </XStack>
          <YStack gap="$2" alignItems="center">
            <Text
              fontSize={12}
              fontFamily="$body"
              fontWeight="400"
              color="$text"
              textAlign="center"
            >
              User profile setup helps personalise your app experience.
            </Text>
            <Text
              fontSize={12}
              fontFamily="$body"
              fontWeight="400"
              color="$text"
              textAlign="center"
            >
              You can change these detail in your profile later.
            </Text>
          </YStack>
        </YStack>

        {/* Form Fields */}
        <YStack gap="$4" marginBottom="$6">
          <Select
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            required
            error={!name.trim() && name.length > 0}
          />
          
          <Select
            label="Phone"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            required
            error={!phone.trim() && phone.length > 0}
          />
          
          <Select
            label="Country"
            placeholder="Select your country"
            value={country}
            onChangeText={setCountry}
            required
          />
          
          <Select
            label="Gender"
            placeholder="Select your gender"
            value={gender}
            onChangeText={setGender}
          />
          
          <Select
            label="Nationality"
            placeholder="Select your nationality"
            value={nationality}
            onChangeText={setNationality}
          />
        </YStack>

        {/* Next Button */}
        <YStack alignItems="center" marginTop="$6">
          <View width={122}>
            <Button
              onPress={handleNext}
              variant="primary"
              disabled={!isFormValid}
            >
              Next
            </Button>
          </View>
        </YStack>
      </YStack>
    </View>
  );
};
