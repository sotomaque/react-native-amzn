import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ProductItem } from '../../components';
import products from '../../data/products';

const SearchScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Products */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default SearchScreen;
