import React, { useState } from 'react'
import { Image, View, Text, TouchableWithoutFeedback, Button,Keyboard, StyleSheet } from 'react-native'
import InputTextSearch from '../components/common/inputText';

export default function Home({ navigation }) {
    const [movieTitle, setMovieTitle] = useState('');

    const pressHandler = () => {
        navigation.navigate('List', { movieName: movieTitle });
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log("keyboard-pñlk-plo") }} >
            <View>
            <Button title="Ver Favoritos" onPress={() => navigation.navigate('Favorites')} />
                <Image style={styles.image } source={{ uri: 'https://laraleonardo.files.wordpress.com/2015/02/perro-cine.jpg' }} />
                <Text style ={styles.title}>Buscar Película</Text>
                <InputTextSearch
                    defaultValue=''
                    placeholder="Ingrese nombre de película...."
                    onChangeText={(movieTitle) => setMovieTitle(movieTitle)}
                />
                <Text>{movieTitle}</Text>
                <Button title='Buscar' onPress={() => navigation.navigate('List', { movieName: movieTitle })} />
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex:1,
      padding: 40,
    },
    list: {
      flex:1,
      marginTop: 20,
    },
    image:{
        width: 200, 
        height: 300,
        alignSelf: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#333'
    }
  });