import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.Text}> Image Screen</Text>
      <ImageDetail
        title={'forest'}
        ImageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title={'beach'}
        ImageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title={'mountain'}
        ImageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 30,
  },
});

export default ImageScreen;
