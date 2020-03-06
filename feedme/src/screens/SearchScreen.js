import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import PriceResultList from "../components/PriceResultList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const searchAPI = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 30,
        term: term,
        location: "vancouver"
      }
    });

    setBusinesses(response.data.businesses);
    console.log(businesses);
  };

  useEffect(() => {
    searchAPI();
  }, []);

  console.log(businesses);

  const filterByPrice = price => {
    return businesses.filter(business => {
      return business.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()}
      />
      <ScrollView>
        <PriceResultList results={filterByPrice("$")} title="Budget Eats" />
        <PriceResultList results={filterByPrice("$$")} title="Average" />
        <PriceResultList
          results={filterByPrice("$$$")}
          title="Gettin' Pricey"
        />
        <PriceResultList
          results={filterByPrice("$$$$")}
          title="Once in a Blue Moon"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
