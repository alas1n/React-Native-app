import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.Direction) {
    case 'INCREASE':
      return { ...state, counter: state.counter + 1 };
    case 'DECREASE':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ Direction: 'INCREASE' });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ Direction: 'DECREASE' });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
