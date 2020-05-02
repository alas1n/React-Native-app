import React from "react";
import { Text, StyleSheet, View } from "react-native";

const MyNameComponent = () => {
  const myName = 'Ali'
  return <View>
    <Text style={styles.text1}> This is my fist React-Native App in android </Text>
    <Text style={styles.text}> My name is {myName}</Text>
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  },
  text1: {
    fontSize: 30
  }
});

export default MyNameComponent