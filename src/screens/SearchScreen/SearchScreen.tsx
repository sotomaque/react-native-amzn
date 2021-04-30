import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductItem } from '../../components';

const SearchScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product */}
      <ProductItem />
      <ProductItem />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default SearchScreen;
