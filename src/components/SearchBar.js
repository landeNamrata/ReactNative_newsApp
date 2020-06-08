import React from 'react'
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onTermChange, term ,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
               autoCapitalize="none"
               autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        //backgroundColor:'#F0EEEE',
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: "row",
    },
    inputStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        flex: 1
    },
    iconStyle: {
        fontSize: 30,
        marginHorizontal: 15,
        alignSelf: 'center',
    }
});

export default SearchBar;

