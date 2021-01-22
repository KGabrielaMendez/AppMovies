import  React  from 'react';
import {Button, StyleSheet} from 'react-native';


const ButtonSearch = (onPress) => (
    <Button
        title="Buscar Película"
        />
);

const styles = StyleSheet.create ({
    button: {
        backgroundColor: '#4CAF50', /* Green */
        
      }
});

export default ButtonSearch;