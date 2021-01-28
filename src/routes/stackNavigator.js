import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/home';
import List from '../screens/list';
import Favorites from './../screens/favorites';
import Details from './../screens/movies';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#5FF9C77",
  },
  headerTintColor: "black",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
          name="Home" 
          component={Home} />
        <Stack.Screen 
          name="List" 
          component={List} />
        <Stack.Screen  
          name="Details" 
          component={Details} />
        <Stack.Screen 
          name="Favorites" 
          component={Favorites} />
    </Stack.Navigator>
  );
}

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, FavoriteStackNavigator};