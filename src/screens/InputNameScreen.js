import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const InputNameScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text> Please insert your name </Text>
      <TextInput
        style={style.inptText}
        // autoCorrect={false}
        // autoCorrect="none"
        value={name}
        onChangeText={(newInput) => setName(newInput)}
      />
      {name.length < 5 ? <Text> not enugh </Text> : <Text> it is good</Text>}
    </View>
  );
};

export default InputNameScreen;

const style = StyleSheet.create({
  inptText: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
