import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, ShoppingCartItem } from '../../components';
import products from '../../data/cart';

import styles from './styles';

const ShoppingCartScreen = () => {
  const prices = products.map(product => product.item.price);
  const totalPrice = prices.reduce((a, b) => a + b);

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
          <Text style={styles.price}>{totalPrice}</Text>
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
