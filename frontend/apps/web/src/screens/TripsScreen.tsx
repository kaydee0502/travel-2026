import React from 'react';
import { YStack, XStack, Text, View, Image } from 'tamagui';
import { Button, BottomNav } from '@travel/ui';

// Import trip images
import Image1 from '../assets/trips/Image1.png';
import Image2 from '../assets/trips/Image2.png';
import Image3 from '../assets/trips/Image3.png';
import Image4 from '../assets/trips/Image4.png';
import Image5 from '../assets/trips/Image5.png';
import Image6 from '../assets/trips/Image6.png';
import Image7 from '../assets/trips/Image7.png';

export const TripsScreen: React.FC = () => {
  const handlePlanTrip = () => {
    console.log('Create Your First Trip');
  };

  const handleTabPress = (tab: string) => {
    console.log('Navigate to:', tab);
  };

  const handleBack = () => {
    console.log('Go back');
  };

  return (
    <View flex={1} backgroundColor="#FFFFFF">
      {/* Header */}
      <XStack
        position="absolute"
        top="$4"
        left={0}
        right={0}
        paddingTop="$3"
        paddingBottom="$2"
        paddingHorizontal="$4"
        alignItems="center"
        justifyContent="center"
        zIndex={10}
        backgroundColor="#FFFFFF"
      >
        {/* Back Button */}
        <View
          position="absolute"
          left="$4"
          onPress={handleBack}
          cursor="pointer"
          pressStyle={{ opacity: 0.7 }}
        >
          <Text fontSize={18} color="#3340CF">←</Text>
        </View>

        {/* Title */}
        <Text
          fontSize={16}
          fontFamily="$body"
          fontWeight="700"
          color="#3340CF"
        >
          Trips
        </Text>
      </XStack>

      {/* Main Content Area */}
      <YStack flex={1} position="relative" justifyContent="center" alignItems="center">
        {/* Concentric Circles */}
        <View
          position="absolute"
          width={540}
          height={540}
          borderRadius={270}
          borderWidth={1}
          borderColor="#E6E6E6"
          left={-75}
          top={82}
        />
        <View
          position="absolute"
          width={420}
          height={420}
          borderRadius={210}
          borderWidth={1}
          borderColor="#E6E6E6"
          left={-14}
          top={141}
        />
        <View
          position="absolute"
          width={304}
          height={304}
          borderRadius={152}
          borderWidth={1}
          borderColor="#E6E6E6"
          left={44}
          top={199}
        />

        {/* Decorative Images - positioned around circles */}
        <Image 
          src={Image1}
          position="absolute"
          width={64}
          height={64}
          left={95}
          top={127}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image2}
          position="absolute"
          width={64}
          height={64}
          right={20}
          top={490}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image3}
          position="absolute"
          width={40}
          height={40}
          left={68}
          top={446}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image4}
          position="absolute"
          width={40}
          height={40}
          right={63}
          top={141}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image5}
          position="absolute"
          width={40}
          height={40}
          left={124}
          top={602}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image6}
          position="absolute"
          width={24}
          height={24}
          right={51}
          top={253}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />
        <Image 
          src={Image7}
          position="absolute"
          width={24}
          height={24}
          left={16}
          top={215}
          borderRadius={10}
          boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
          objectFit="cover"
          alt="Trip destination"
        />

        {/* Center Content */}
        <YStack
          position="absolute"
          left={0}
          right={0}
          top={352}
          style={{ transform: 'translateY(-50%)' }}
          zIndex={20}
          alignItems="center"
          gap="$3"
          paddingHorizontal="$6"
        >
          <XStack gap={0} alignItems="center" justifyContent="center" flexWrap="wrap">
            <Text
              fontSize={16}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
              textAlign="center"
            >
              Your{' '}
            </Text>
            <Text
              fontSize={16}
              fontFamily="$body"
              fontWeight="700"
              color="#3340CF"
              textAlign="center"
            >
              next adventure
            </Text>
            <Text
              fontSize={16}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
              textAlign="center"
            >
              {' '}awaits you
            </Text>
          </XStack>
          <View width={167}>
            <Button onPress={handlePlanTrip} variant="primary">
              Create Your First Trip
            </Button>
          </View>
        </YStack>
      </YStack>

      {/* Bottom Navigation */}
      <BottomNav activeTab="Trips" onTabPress={handleTabPress} />
    </View>
  );
};
