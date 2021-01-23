import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, FavoriteStackNavigator } from "./stackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
        activeColor="blue"
        style={{ backgroundColor: '#FF9C77' }}>
      <Tab.Screen 
        name="Home" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: 'Buscar',
          tabBarColor: '#F7B51D',
          tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={26} />
          ),
      }}/>
      <Tab.Screen 
        name="Favorites" 
        component={FavoriteStackNavigator} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarColor: '#2CB400',
          tabBarIcon: ({ color }) => (
              <Icon name="star" color={color} size={26} />
          ),
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;