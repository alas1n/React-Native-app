import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.Text}> Image Screen</Text>
      <ImageDetail
        title={'forest'}
        imageScore={4}
        ImageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title={'beach'}
        imageScore={8}
        ImageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title={'mountain'}
        imageScore={7}
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
