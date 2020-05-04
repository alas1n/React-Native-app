import React from 'react';
import { View, Button, Text } from 'react-native';

const ColorCounterComponent = ({ ColorName, LessColor, MoreColor }) => {
  return (
    <View>
      <Text> {ColorName} </Text>
      <Button
        title={`More ${ColorName}`}
        onPress={() => {
          MoreColor();
        }}
      />
      <Button
        title={`Less ${ColorName}`}
        onPress={() => {
          LessColor();
        }}
      />
    </View>
  );
};

export default ColorCounterComponent;
