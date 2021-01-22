import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';
import { StackActions } from 'react-navigation';
import Navigator from './src/routes/homeStack'; 
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import Favorites from './src/components/favorites';
import ListMovies from './src/screens/list';

const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Navigator/>
/*     <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component= {MainTabScreen}/>
        <Drawer.Screen name="List" component= {ListMovies}/>
      </Drawer.Navigator>
      
    {/*   <Stack.Navigator>
      <Stack.Screen name="Search" component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator> 
  
    </NavigationContainer> }*/
  


    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
