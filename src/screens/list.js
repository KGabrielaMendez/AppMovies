import React, { useState, useEffect, Fragment } from 'react'
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import getMovie from '../services/search';
import CardMovie from './../components/common/cardMovie';
import AddFavoriteComponent from './../components/common/addFavorites';

export default function ListMovies({ navigation, route }) {
    console.log(route.params.name)
    const list = getMovie(route.params.name);
    let isLoading = true;
    list ? isLoading = false : isLoading = true;
        console.log('qwerty.')
    return (
        <View >
            <AddFavoriteComponent {...list}/>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {list:list })} >
                <CardMovie {...list} isLoading={isLoading} />
            </TouchableOpacity>
            
        </View>
    )
};

const styles = StyleSheet.create({
    add: {
        alignSelf:'center'
    }
})