import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import axios from 'axios'
import ResultList from '../components/ResultList';

const HomeScreen = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessgae, setErrorMessage] = useState('');
  console.log(results)
  const searchApi = (searchTerm) => {
    try {
      axios.get("https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/ ",
        {
          headers: {
            "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "e71cb0ee0dmshc684092623d89d7p142216jsnbf551f1301ba"
          },

        }).then(response => {
          // console.log(response.data.value)
          setResults(response.data.value)
        })
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }
  // useEffect(() => {
  //   searchApi('news charges');
  // }, [])

  console.log(results)
  return (
    <View style={{ marginLeft: 5, marginRight: 5 ,marginBottom:3}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessgae ? <Text>{errorMessgae}</Text> : null}
      <Text style={styles.result}>Total {results.length} results</Text>
      <ResultList
        results={results}
        title="News"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  result: {
    alignSelf: 'flex-end',
    marginRight: 7,
    marginBottom: 5
  }
});

export default HomeScreen;
