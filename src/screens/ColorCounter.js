import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounterComponent from './../components/ColorCounterComponent';

const COLOR_THRESHOLD = 5;

const reducer = (state, action) => {
  // state === red: number, green: number, blue: number}
  // action === {type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE', pyaload: 15 || -15}
  switch (action.ColorToChange) {
    case 'CHANGE_RED':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'CHANGE_GREEN':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'CHANGE_BLUE':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const ColorCounter = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounterComponent
        ColorName={'red'}
        LessColor={() =>
          dispatch({
            ColorToChange: 'CHANGE_RED',
            payload: -1 * COLOR_THRESHOLD,
          })
        }
        MoreColor={() =>
          dispatch({ ColorToChange: 'CHANGE_RED', payload: COLOR_THRESHOLD })
        }
      />
      <ColorCounterComponent
        ColorName={'green'}
        LessColor={() =>
          dispatch({
            ColorToChange: 'CHANGE_GREEN',
            payload: -1 * COLOR_THRESHOLD,
          })
        }
        MoreColor={() =>
          dispatch({ ColorToChange: 'CHANGE_GREEN', payload: COLOR_THRESHOLD })
        }
      />
      <ColorCounterComponent
        ColorName={'blue'}
        LessColor={() =>
          dispatch({
            ColorToChange: 'CHANGE_BLUE',
            payload: -1 * COLOR_THRESHOLD,
          })
        }
        MoreColor={() =>
          dispatch({ ColorToChange: 'CHANGE_BLUE', payload: COLOR_THRESHOLD })
        }
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text style={{ fontSize: 30 }}>{`rgb(${red},${green},${blue})`}</Text>
    </View>
  );
};

export default ColorCounter;

const styls = StyleSheet.create({});

// //========================================\\
// ||=====Manage state by useState Hook======||
// \\========================================//

// import React, { useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';
// import ColorCounterComponent from './../components/ColorCounterComponent';

// const COLOR_THRESHOLD = 5;

// const ColorCounter = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const setColor = (color, value) => {
//     switch (color) {
//       case 'red':
//         red + value > 255 || red + value < 0 ? null : setRed(red + value);
//         break;
//       case 'blue':
//         blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
//         break;
//       case 'green':
//         green + value > 255 || green + value < 0
//           ? null
//           : setGreen(green + value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <View>
//       <ColorCounterComponent
//         ColorName={'red'}
//         LessColor={() => {
//           setColor('red', COLOR_THRESHOLD);
//         }}
//         MoreColor={() => {
//           setColor('red', -1 * COLOR_THRESHOLD);
//         }}
//       />
//       <ColorCounterComponent
//         ColorName={'green'}
//         LessColor={() => {
//           setColor('green', COLOR_THRESHOLD);
//         }}
//         MoreColor={() => {
//           setColor('green', -1 * COLOR_THRESHOLD);
//         }}
//       />
//       <ColorCounterComponent
//         ColorName={'blue'}
//         LessColor={() => {
//           setColor('blue', COLOR_THRESHOLD);
//         }}
//         MoreColor={() => {
//           setColor('blue', -1 * COLOR_THRESHOLD);
//         }}
//       />
//       <View
//         style={{
//           height: 200,
//           width: 200,
//           backgroundColor: `rgb(${red},${green},${blue})`,
//         }}
//       />
//       <Text style={{ fontSize: 30 }}>{`rgb(${red},${green},${blue})`}</Text>
//     </View>
//   );
// };

// export default ColorCounter;

// const styls = StyleSheet.create({});
