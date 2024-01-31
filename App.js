import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App  () {
  return (
    <NavigationContainer>
        <AppNavigator/>
    </NavigationContainer>
    );
}; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});