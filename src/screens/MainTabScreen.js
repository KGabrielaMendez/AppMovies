import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './home';
import Favorites from '../components/favorites';

const HomeStack = createStackNavigator();
const FavoritesStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Buscar"
        activeColor="white"
        style={{ backgroundColor: '#2CB400' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Buscar',
                tabBarColor: '#F7B51D',
                tabBarIcon: ({ color }) => (
                    <Icon name="search" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Favoritos"
            component={FavoritesStackScreen}
            options={{
                tabBarLabel: 'Favoritos',
                tabBarColor: '#2CB400',
                tabBarIcon: ({ color }) => (
                    <Icon name="star" color={color} size={26} />
                ),
            }}
        />
        {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>

);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>

        <HomeStack.Screen 
            name="Buscar Películax"
            component={Home} 
            options={{
                tabBarColor: '#F7B51D',
            }}
             />
        </HomeStack.Navigator>
);

const FavoritesStackScreen = ({ navigation }) => (
    <FavoritesStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <FavoritesStack.Screen
            name="Favoritosdd"
            component={Favorites}
        />
    </FavoritesStack.Navigator>
);