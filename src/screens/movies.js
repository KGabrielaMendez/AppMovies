import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Details({ navigation,route}) {
    const movie = route.params.list;
    const {
        Title,
        Year,
        Genre,
        Director,
        Plot,
        Rated,
        Released,
        Type,
        Poster,
        imdbID
    } = movie;
    return (
        <View>
            <View>
                <View style={styles.content}>
                    <Image
                        source={{ uri: Poster }}
                        style={styles.image}
                    />
                    <Text style={styles.titleMovie}> {Title} </Text>
                </View>
                <Text style={styles.text}>{Genre}</Text>
                <Text style={styles.detail} >{Plot}</Text>
                <Text style={styles.release}>{Released}</Text>
                <Text style={styles.type}>Type: {Type}</Text>
            </View>
        </View>
    );


};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCFFC4',
        borderRadius: 6,
        borderColor: '#333'
    },
    content: {
        margin:10,
        borderWidth:1,
        borderColor: '#A8A8A8',
        borderRadius:15
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    titleMovie: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    image: {
        width: 200,
        height: 300,
        alignContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
    },
    text: {
        margin:5,
        textAlign: 'center',
        color:'black'
    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    detail: {
        textAlign: 'center',
        color: 'gray',
    },
    release: {
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius:2,
        backgroundColor:'#F3F3F3',
    },
    type: {
        textAlign: 'center',
        color: 'blue'
    }
});