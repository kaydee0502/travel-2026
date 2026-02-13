import React from 'react';
import { YStack, XStack, Text, View } from 'tamagui';
import { StyleSheet } from 'react-native';
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
        top={"$4"}
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
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />

        {/* Decorative Images - positioned around circles */}
        <View style={[styles.imageContainer, styles.image1]} />
        <View style={[styles.imageContainer, styles.image2]} />
        <View style={[styles.imageContainer, styles.image3]} />
        <View style={[styles.imageContainer, styles.image4]} />
        <View style={[styles.imageContainer, styles.image5]} />
        <View style={[styles.imageContainer, styles.image6]} />
        <View style={[styles.imageContainer, styles.image7]} />

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

const styles = StyleSheet.create({
  circle1: {
    position: 'absolute',
    width: 540,
    height: 540,
    borderRadius: 270,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    left: -75,
    top: 82,
  },
  circle2: {
    position: 'absolute',
    width: 420,
    height: 420,
    borderRadius: 210,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    left: -14,
    top: 141,
  },
  circle3: {
    position: 'absolute',
    width: 304,
    height: 304,
    borderRadius: 152,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    left: 44,
    top: 199,
  },
  imageContainer: {
    position: 'absolute',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: -3, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  image1: {
    width: 64,
    height: 64,
    left: 95,
    top: 127,
  },
  image2: {
    width: 64,
    height: 64,
    right: 20,
    top: 490,
  },
  image3: {
    width: 40,
    height: 40,
    left: 68,
    top: 446,
  },
  image4: {
    width: 40,
    height: 40,
    right: 63,
    top: 141,
  },
  image5: {
    width: 40,
    height: 40,
    left: 124,
    top: 602,
  },
  image6: {
    width: 24,
    height: 24,
    right: 51,
    top: 253,
  },
  image7: {
    width: 24,
    height: 24,
    left: 16,
    top: 215,
  },
});
