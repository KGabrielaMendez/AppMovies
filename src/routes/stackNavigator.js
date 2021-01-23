import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home';
import List from '../screens/list';
import Favorites from './../screens/favorites';
import Details from './../screens/movies';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#4A88FF",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
          name="Página Principal" 
          component={Home} />
        <Stack.Screen 
          name="Resultados de la Búsqueda" 
          component={List} />
        <Stack.Screen  
          name="Detalles de la Película" 
          component={Details} />
        <Stack.Screen 
          name="Favoritos" 
          component={Favorites} />
    </Stack.Navigator>
  );
}

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Favoritos" component={Favorites} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, FavoriteStackNavigator};