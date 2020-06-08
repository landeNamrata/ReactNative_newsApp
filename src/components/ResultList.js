import React from 'react'
import { Text, StyleSheet, View, FlatList } from "react-native";
import ResultDetails from '../components/ResultDetails';

const ResultList = ({ title, results }) => {
    return (
        <View>

            <FlatList
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultDetails 
                    item={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 28
    }
})

export default ResultList;
