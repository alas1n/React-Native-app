import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";


const DATA = [
  {
    name: 'friend 1',
    age: 21
  },
  {
    name: 'friend 2',
    age: 24
  },
  {
    name: 'friend 6',
    age: 54
  },
  {
    name: 'friend 3',
    age: 65
  },
  {
    name: 'friend 4',
    age: 22
  },
  {
    name: 'friend 5',
    age: 17
  }
]

const FlatListComponent = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.name}
        renderItem={({ item }) => {
          return (
            <Text>My {item.name}, he is {item.age} years old</Text>
            )
        }
        }
      />
    </View>
  );
}


export default FlatListComponent