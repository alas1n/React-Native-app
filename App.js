import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MyNameComponent from './src/screens/MyNameComponent';
import FlatListComponent from './src/screens/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorCounter from './src/screens/ColorCounter';
import InputNameScreen from './src/screens/InputNameScreen';
import StylingScreen from './src/screens/StylingScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyName: MyNameComponent,
    List: FlatListComponent,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    CoCounter: ColorCounter,
    InputName: InputNameScreen,
    StylingS: StylingScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
