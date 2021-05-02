import React from 'react';
import { View, FlatList } from 'react-native';
import { ShoppingCartItem } from '../../components';
import products from '../../data/cart';

import styles from './styles';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Product list */}
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ShoppingCartItem key={`${item.id}-${index}`} item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
