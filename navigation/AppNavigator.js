import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { color } from 'react-native-elements/dist/helpers';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import AccommodationScreen from '../screens/AccommodationScreen';
import EventsScreen from '../screens/EventsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarLabel:'Home',
        tabBarIcon: ({color, size}) => (<Ionicons name="home" size={24} color="black" />),
      }} />
      <Tab.Screen
        name="Restaurants&Coffie Bars"
        component={RestaurantsScreen}
        options={{
          tabBarLabel: 'R&CB',
          tabBarIcon: ({ color, size }) => (<Ionicons name="restaurant" size={24} color="black"/>),
        }}
      />
      <Tab.Screen
        name="Accomodation"
        component={AccommodationScreen}
        options={{
          tabBarLabel: 'Acc',
          tabBarIcon: ({ color, size }) => (<Ionicons name="bed" size={24} color="black"/>),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (<Ionicons name="musical-note" size={24} color="black"/>),
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherScreen}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({ color, size }) => (<Ionicons name="logo-slack" size={24} color="black"/>),
        }}
      />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon: ({color, size}) => (<Ionicons name="accessibility" size={24} color="black"/>),
      }} />
        </Tab.Navigator>
);
}



