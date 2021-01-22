import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const CardMovie = (list, { isLoading }
) => {
    return (
        <View >
            {isLoading ? <ActivityIndicator size="large" color="#00ff00" /> :
                <>
                    <Image
                        source={{ uri: list.Poster }}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}> {list.Title} </Text>
                </>
            }
            <View style= {styles.line}  
              />
              
        </View>
    )
}
export default CardMovie;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCFFC4',
        borderRadius: 6,
        borderColor: '#333'
    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
    },
    titleText: {
        fontSize: 25,
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
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
});