import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home';
import Book1 from './src/screens/Book1';
import Book3 from './src/screens/Book3';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
  
  <NavigationContainer> 
    <Stack.Navigator   screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Books 1 & 2" component={Book1} />
      <Stack.Screen name="Books 3, 4 & 5" component={Book3} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex:1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
})
