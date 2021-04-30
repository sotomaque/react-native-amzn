import React from 'react';
import { View, FlatList } from 'react-native';
import { ProductItem } from '../../components';
import products from '../../data/products';
import styles from './styles';

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

export default SearchScreen;
