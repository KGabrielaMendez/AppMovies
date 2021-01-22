import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardMovie from './common/cardMovie';
import DeleteFavoriteComponent from './deleteFavorite';

export default function Favorites({ navigation }) {

    const [arrayF, setArrayF] = useState({});
    const m2 = [];

    // const get = () => {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
            stores.map((result, i, store) => {
                m2.push(JSON.parse(store[i][1]));
            });
            setArrayF(m2);
        });
    });
    //}
    //useEffect(() => AsyncStorage.getAllKeys(), []);

    let isLoading = true;
    arrayF ? isLoading = false : isLoading = true;

    return (
        <View  >
            {/* <Button onPress={()=>get()} title='Mostrar'></Button> */}
            <Text style={styles.titleText}> Lista de Favoritos</Text>
            {isLoading ?
                <ActivityIndicator size="large" color="black" />
                :
                arrayF.length > 0 ?
                    <FlatList
                        data={arrayF}
                        keyExtractor={item => item.imdbID}
                        renderItem={({ item }) =>
                            <View>
                                <DeleteFavoriteComponent {...item} />
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Details', { name: item })}
                                    style={styles.container} >
                                    <CardMovie {...item} isLoading={isLoading} />
                                </TouchableOpacity>
                            </View>
                        } />
                    :
                    <View>
                        <Text style={styles.content}> No Hay Favoritos</Text>
                        <Image 
                        style={styles.image}
                        source={require('C:/ReactNative/app-movies/assets/not-found.png')}/>
                    </View>


            }
            {/*   <TouchableOpacity onPress={() => navigation.navigate('Details', { name: list })} >
                <CardMovie {...list} isLoading={isLoading} />
            </TouchableOpacity> */}

        </View>
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

























/*

const GetFavoritesComponents = () => {


    const [arrayF, setArrayF] = useState({});
    const movie = {};
    const m2 = []


    const getList = () => {
        AsyncStorage.getAllKeys((err, keys) => {
            err ? alert('Error, ' + err) :
                AsyncStorage.multiGet(keys, (err, stores) => {
                    stores.map((result, i, store) => {
                        movie[i] = JSON.parse(store[i][1]);
                        m2.push(JSON.parse(store[i][1]));
                        console.log(movie[i].Title);
                        console.log(m2[i].Year);
                    });
                    setArrayF(m2);
                });
        });
        console.log("get " + arrayF.length);
    }

    let isLoading = true;
    arrayF ? isLoading = false : isLoading = true;

    return (
        <View>
            <Button title="Ver Favoritos" onPress={() => getList()}> </Button>
            {arrayF.length > 0 ?
                <Text>-esperando datos...</Text>


                :
                <Text>No hay Favoritos </Text>
            }
        </View>
    )
}

export default GetFavoritesComponents; */