import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MyNameComponent from './src/screens/MyNameComponent'
import FlatListComponent from './src/screens/FlatListComponent'
import ImageScreen from './src/screens/ImageScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MyName: MyNameComponent,
    List: FlatListComponent,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);