import React from 'react'
import { Text, StyleSheet, View, FlatList, Image, Button, Linking } from "react-native";
const ResultDetails = ({ item }) => {

    return (
        <View>
            <Text style={styles.title}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.image.thumbnail.contentUrl }} />
            <Text>name: {item.provider[0].name}</Text>
            <Text>Published Date: {item.datePublished}</Text>
            <Text style={{ fontWeight: 'bold' }}>Description: {item.description}</Text>
            <Text
                onPress={() => Linking.openURL(item.url)}
                style={{ color: 'blue', marginBottom: 5, alignSelf: 'flex-end' }}
            >Read More...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 200,
        borderRadius: 4,
        alignSelf: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'space-between'
    }
})

export default ResultDetails;