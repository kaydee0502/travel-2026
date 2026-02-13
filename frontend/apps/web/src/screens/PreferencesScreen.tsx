import React, { useState } from 'react';
import { YStack, XStack, Text, View, ScrollView } from 'tamagui';
import { Chip, Button } from '@travel/ui';

interface PreferencesScreenProps {
  onSubmit?: () => void;
  onSkip?: () => void;
}

export const PreferencesScreen: React.FC<PreferencesScreenProps> = ({ onSubmit, onSkip }) => {
  // Travel vibe preferences
  const [travelVibes, setTravelVibes] = useState<string[]>(['🥾 Adventure', '🏛️ Cultural Exploration']);
  
  // Accommodation preferences
  const [accommodations, setAccommodations] = useState<string[]>(['🏡 Cozy Bed & Breakfast', '⛺ Camping Retreat']);
  
  // Food preferences
  const [foodPreferences, setFoodPreferences] = useState<string[]>(['🍽️ Local Cuisine', '🥕 Vegan']);
  
  // Activity preferences
  const [activities, setActivities] = useState<string[]>(['🥾 Hiking', '🛍️ Local Markets']);
  
  // Travel companion preference
  const [travelWith, setTravelWith] = useState<string[]>(['❤️ Couple', '👨‍👩‍👧‍👦 Family']);

  const toggleSelection = (item: string, currentList: string[], setList: (list: string[]) => void) => {
    if (currentList.includes(item)) {
      setList(currentList.filter(i => i !== item));
    } else {
      setList([...currentList, item]);
    }
  };

  const handleSubmit = () => {
    console.log('Preferences:', {
      travelVibes,
      accommodations,
      foodPreferences,
      activities,
      travelWith,
    });
    onSubmit?.();
  };

  const handleSkip = () => {
    console.log('Skip preferences');
    onSkip?.();
  };

  return (
    <View flex={1} backgroundColor="#FFFFFF" height="100%">
      <ScrollView 
        flex={1} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%' }}
      >
        <YStack paddingHorizontal="$4" paddingVertical="$6" gap="$6">
          {/* Travel Vibe Section */}
          <YStack gap="$3">
            <Text
              fontSize={18}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
            >
              What kind of travel vibe are you into?
            </Text>
            <YStack gap="$1">
              <Text fontSize={12} fontFamily="$body" color="#000000">
                Pick as many as you
              </Text>
              <Text fontSize={10} fontFamily="$body" color="#000000">
                like
              </Text>
            </YStack>
            <XStack flexWrap="wrap" gap="$2">
              {['🥾 Adventure', '🧘 Relaxation', '🏛️ Cultural Exploration', '🌿 Nature & Wildlife'].map(vibe => (
                <Chip
                  key={vibe}
                  label={vibe}
                  selected={travelVibes.includes(vibe)}
                  onPress={() => toggleSelection(vibe, travelVibes, setTravelVibes)}
                />
              ))}
            </XStack>
          </YStack>

          {/* Accommodation Section */}
          <YStack gap="$3">
            <YStack gap="$1">
              <Text
                fontSize={18}
                fontFamily="$body"
                fontWeight="400"
                color="#3340CF"
              >
                Where do you love to crash after a day
              </Text>
              <Text
                fontSize={18}
                fontFamily="$body"
                fontWeight="400"
                color="#3340CF"
              >
                of adventure?
              </Text>
            </YStack>
            <YStack gap="$1">
              <Text fontSize={12} fontFamily="$body" color="#000000">
                Your ideal stay looks
              </Text>
              <Text fontSize={12} fontFamily="$body" color="#000000">
                like...
              </Text>
            </YStack>
            <XStack flexWrap="wrap" gap="$2">
              {['🏨 Luxury Stays', '🏡 Cozy Bed & Breakfast', '🛏️ Budget Stays', '⛺ Camping Retreat'].map(acc => (
                <Chip
                  key={acc}
                  label={acc}
                  selected={accommodations.includes(acc)}
                  onPress={() => toggleSelection(acc, accommodations, setAccommodations)}
                />
              ))}
            </XStack>
          </YStack>

          {/* Food Preferences Section */}
          <YStack gap="$3">
            <Text
              fontSize={18}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
            >
              What kind of food excites your taste buds?
            </Text>
            <YStack gap="$1">
              <Text fontSize={12} fontFamily="$body" color="#000000">
                Your foodie
              </Text>
              <Text fontSize={12} fontFamily="$body" color="#000000">
                favorites...
              </Text>
            </YStack>
            <XStack flexWrap="wrap" gap="$2">
              {['🍽️ Local Cuisine', '🍗 Street Food', '🥕 Vegan', '🍢 Street Food'].map(food => (
                <Chip
                  key={food}
                  label={food}
                  selected={foodPreferences.includes(food)}
                  onPress={() => toggleSelection(food, foodPreferences, setFoodPreferences)}
                />
              ))}
            </XStack>
          </YStack>

          {/* Activities Section */}
          <YStack gap="$3">
            <Text
              fontSize={18}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
            >
              What activities are you interested in?
            </Text>
            <YStack gap="$1">
              <Text fontSize={12} fontFamily="$body" color="#000000">
                Let's plan for what you love
              </Text>
              <Text fontSize={12} fontFamily="$body" color="#000000">
                doing...
              </Text>
            </YStack>
            <XStack flexWrap="wrap" gap="$2">
              {['🥾 Hiking', '🏙️ City Tours', '🛍️ Local Markets', '🎵 Live Music'].map(activity => (
                <Chip
                  key={activity}
                  label={activity}
                  selected={activities.includes(activity)}
                  onPress={() => toggleSelection(activity, activities, setActivities)}
                />
              ))}
            </XStack>
          </YStack>

          {/* Travel Companion Section */}
          <YStack gap="$3">
            <Text
              fontSize={18}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
            >
              Who do you usually travel with?
            </Text>
            <YStack gap="$1">
              <Text fontSize={12} fontFamily="$body" color="#000000">
                This helps us tailor the experience to your
              </Text>
              <Text fontSize={12} fontFamily="$body" color="#000000">
                group!
              </Text>
            </YStack>
            <XStack flexWrap="wrap" gap="$2">
              {['🧑 Solo', '❤️ Couple', '👥 Friends Group', '👨‍👩‍👧‍👦 Family'].map(companion => (
                <Chip
                  key={companion}
                  label={companion}
                  selected={travelWith.includes(companion)}
                  onPress={() => toggleSelection(companion, travelWith, setTravelWith)}
                />
              ))}
            </XStack>
          </YStack>

          {/* Submit Button */}
          <YStack gap="$4" alignItems="center" marginTop="$4">
            <View width="100%" maxWidth={280}>
              <Button onPress={handleSubmit} variant="primary">
                Submit
              </Button>
            </View>

            {/* Skip Link */}
            <Text
              fontSize={14}
              fontFamily="$body"
              fontWeight="400"
              color="#3340CF"
              textAlign="center"
              onPress={handleSkip}
              cursor="pointer"
            >
              Skip and share later
            </Text>
          </YStack>
        </YStack>
      </ScrollView>
    </View>
  );
};
