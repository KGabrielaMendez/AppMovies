import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Favorites from '../../screens/favorites';

const AddFavoriteComponent = ( id ) => {
    const [add, setAdd] = useState(false);

    const saveFavorites = (list) => {
        console.log(list.imdbID);
        AsyncStorage.setItem(list.imdbID, JSON.stringify(list));
        alert("Se añadió a favoritos");
    }

    const searchFavorite = (id) => {
        AsyncStorage.getItem(id.imdbID, (errorAsync)=>{
            errorAsync=== null ? console.log("ya esta guardado "+errorAsync)
            :console.log("llama a guardar "+errorAsync); 
            //setAdd(errorAsync);
        });
        return add;
    }
    console.log(add+'-ñ');

    return (
        <View>
            <TouchableOpacity 
            onPress={() => saveFavorites(id)}
            style={styles.container}>
                <Icon name="star" color='#F7B51D' size={40} style={styles.star} />
                <Text>Añadir a Favoritos</Text>
            </TouchableOpacity>

        </View>


    )
}

export default AddFavoriteComponent;


const styles = StyleSheet.create({
    color: {
        backgroundColor: '#f5b22d',
    },
    container: {
        flexDirection:'column-reverse',
        alignSelf:'flex-end',
        borderColor: '#6B6D69',
        borderRadius:10,
    },
    star:{
        alignSelf:'center',
    }
});