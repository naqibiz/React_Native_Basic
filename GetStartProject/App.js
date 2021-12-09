import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// IMPORT SCREENS
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
