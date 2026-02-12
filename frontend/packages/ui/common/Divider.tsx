import * as React from 'react';
import { XStack, View, Text } from 'tamagui';

export const Divider: React.FC = () => {
  return (
    <XStack alignItems="center" width="100%" gap="$3">
      <View flex={1} height={1} backgroundColor="#C1C1C1" />
      <Text
        fontSize={10}
        fontFamily="$body"
        color="#7F7F7F"
        fontWeight="400"
      >
        Or
      </Text>
      <View flex={1} height={1} backgroundColor="#C1C1C1" />
    </XStack>
  );
};
