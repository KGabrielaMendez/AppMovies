import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardMovie from '../components/common/cardMovie';
import DeleteFavoriteComponent from '../components/deleteFavorite';

export default function Favorites({ navigation }) {

    const [arrayF, setArrayF] = useState({});
    const m2 = [];
    
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
                m2.push(JSON.parse(store[i][1]));
            });
            setArrayF(m2);
        });
    });

    let isLoading = true;
    arrayF ? isLoading = false : isLoading = true;

    return (
        <  >
            <Text style={styles.titleText}> Lista de Favoritos</Text>
            {isLoading ?
                <ActivityIndicator size="large" color="black" />
                :
                arrayF.length > 0 ?
                    <FlatList
                        data={arrayF}
                        keyExtractor={item => item.imdbID}
                        renderItem={({ item }) =>
                            <>
                                <DeleteFavoriteComponent {...item} />
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Details', { list: item })}
                                    style={styles.container} >
                                    <CardMovie {...item} isLoading={isLoading} />
                                </TouchableOpacity>
                            </>
                        } />
                    :
                    <>
                        <Text style={styles.content}> No Hay Favoritos</Text>
                        <Image
                            style={styles.image}
                            source={require('C:/ReactNative/app-movies/assets/not-found.png')} />
                    </>
            }
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#6B6D69',
        borderTopEndRadius: 50
    },
    content: {
        textAlign: 'center',
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    image: {
        alignContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
    },
});