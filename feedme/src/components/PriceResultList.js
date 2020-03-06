import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PriceResult from "./PriceResult";

const PriceResultList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        data={results}
        renderItem={({ item }) => {
          return <PriceResult result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default PriceResultList;
