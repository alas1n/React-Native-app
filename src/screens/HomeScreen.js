import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('MyName')}
        title="Go to Componnent Demo"
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        style={styles.button}
        title="Go to Image page"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        style={styles.button}
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        style={styles.button}
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.button}
        title="Go to Color Counter"
        onPress={() => navigation.navigate('CoCounter')}
      />
      <Button
        style={styles.button}
        title="Go to InputNameScreen"
        onPress={() => navigation.navigate('InputName')}
      />
      <Button
        style={styles.button}
        title="Go to StylingScreen"
        onPress={() => navigation.navigate('StylingS')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 25,
  },
});

export default HomeScreen;
