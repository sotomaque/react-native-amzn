import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, ShoppingCartItem } from '../../components';
import products from '../../data/cart';

import styles from './styles';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Subtotal + Proceed to checkout button */}
      <View style={{ margin: 10 }}>
        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={{ fontSize: 20 }}>
            Subtotal ({products.length} item{products.length > 1 ? 's' : ''}):
          </Text>
          <Text style={styles.priceSuperscript}>$</Text>
          <Text style={styles.price}>232.87</Text>
        </View>

        <Button onPress={() => {}} title={'Proceed to checkout'} />
      </View>
      {/* Product list */}
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ShoppingCartItem key={`${item.id}-${index}`} cartItem={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
