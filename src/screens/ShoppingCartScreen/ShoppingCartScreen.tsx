import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import products from '../../data/cart';
import { Button, ShoppingCartItem } from '../../components';
import styles from './styles';

const ShoppingCartScreen = () => {
  const prices = products.map(product => product.item.price);
  const totalPrice = prices.reduce((a, b) => a + b);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
        <View
          style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            boxType="square"
            onCheckColor="orange"
            onTintColor="orange"
          />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>
            This order contains a gift
          </Text>
        </View>
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
