import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/routes/tabNavigator";
//import Navigator from './src/routes/homeStack';

const App = () => {
  return (
    
   <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer> 
  )

  }
  export default App; 

    // <Navigator/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
