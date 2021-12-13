import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// IMPORT SCREENS
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import StatesMultipleScreens from './src/screens/StatesMultipleScreens';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorCounter from './src/components/ColorCounter';
import SquareScreen from './src/screens/SquareScreen';
import Reducer from './src/screens/Reducer';
import CounterReducer from './src/screens/CounterReducer';
import InputText from './src/screens/InputText';
import FlexAlignment from './src/screens/FlexAlignment';
import ScreenLayout from './src/screens/ScreenLayout';
import FlexDirection from './src/screens/LayoutFlexDirection';
import LayoutJustifyContent from './src/screens/LayoutJustifyContent';
import Flex from './src/screens/Flex';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ComponentScreen" component={ComponentScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen
          name="StatesMultipleScreens"
          component={StatesMultipleScreens}
        />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="ColorCounter" component={ColorCounter} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
        <Stack.Screen name="Reducer" component={Reducer} />
        <Stack.Screen name="CounterReducer" component={CounterReducer} />
        <Stack.Screen name="InputText" component={InputText} />
        <Stack.Screen name="ScreenLayout" component={ScreenLayout} />
        <Stack.Screen name="FlexAlignment" component={FlexAlignment} />
        <Stack.Screen name="FlexDirection" component={FlexDirection} />
        <Stack.Screen name="LayoutJustifyContent" component={LayoutJustifyContent} />
        <Stack.Screen name="FlexValue" component={Flex} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
