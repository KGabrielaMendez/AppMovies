import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';



const DeleteFavoriteComponent = ( id ) => {

    const saveFavorites = (list) => {
        AsyncStorage.removeItem(list.imdbID, (err)=>{
        });
        
        alert("Se eliminó de favoritos");
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => saveFavorites(id)}>
                <Icon name="close" color='red' size={50} />
            </TouchableOpacity>

        </View>


    )
}
export default DeleteFavoriteComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'flex-end',
        borderColor: '#6B6D69',
        borderRadius:10,
        borderWidth:1
    },
});