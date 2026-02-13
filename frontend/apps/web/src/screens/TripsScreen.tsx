import React from 'react';
import { YStack, XStack, Text, View } from 'tamagui';
import { Button, BottomNav } from '@travel/ui';

export const TripsScreen: React.FC = () => {
  const handlePlanTrip = () => {
    console.log('Plan a new trip');
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
        <View
          position="absolute"
          width={64}
          height={64}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          left={95}
          top={127}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={64}
          height={64}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          right={20}
          top={490}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={40}
          height={40}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          left={68}
          top={446}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={40}
          height={40}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          right={63}
          top={141}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={40}
          height={40}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          left={124}
          top={602}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={24}
          height={24}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          right={51}
          top={253}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />
        <View
          position="absolute"
          width={24}
          height={24}
          backgroundColor="#D3D3D3"
          borderRadius={10}
          left={16}
          top={215}
          boxShadow="-3px 6px 10px rgba(0, 0, 0, 0.25)"
        />

        {/* Center Content */}
        <YStack
          position="absolute"
          alignItems="center"
          gap="$3"
          paddingHorizontal="$6"
          zIndex={20}
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
          <View width={137}>
            <Button onPress={handlePlanTrip} variant="primary">
              Plan a new trip
            </Button>
          </View>
        </YStack>
      </YStack>

      {/* Bottom Navigation */}
      <BottomNav activeTab="Trips" onTabPress={handleTabPress} />
    </View>
  );
};
