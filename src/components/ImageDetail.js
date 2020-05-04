import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageScore, ImageSource }) => {
  return (
    <View>
      <Text> {title} </Text>
      <Text> this Image score is {imageScore} </Text>
      <Image source={ImageSource} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
