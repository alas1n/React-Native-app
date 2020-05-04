import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StyingScreen = () => {
  return (
    <View>
      <View style={styls.viewParent}>
        <View style={styls.viewLeft}></View>
        <View style={styls.viewRight}></View>
      </View>
      <View style={styls.viewCenter}></View>
    </View>
  );
};

export default StyingScreen;

const styls = StyleSheet.create({
  viewLeft: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
  },
  viewRight: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
  },
  viewCenter: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  viewParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
