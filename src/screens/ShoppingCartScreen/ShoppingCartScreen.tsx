import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../navigation/types';
import { Button, ShoppingCartItem } from '../../components';
import products from '../../data/cart';
import styles from './styles';

type ShoppingCartScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cart'>;
};

const ShoppingCartScreen = ({ navigation }: ShoppingCartScreenProps) => {
  const totalPrice = products
    .reduce(
      (summedPrice, product) =>
        summedPrice + product.item.price * product.quantity,
      0,
    )
    .toFixed(2);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      {/* Subtotal + Proceed to checkout button */}
      <View style={styles.subtotalContainer}>
        {/* Price */}
        <View style={styles.priceContainer}>
          <Text style={styles.subtotalLabel}>
            Subtotal ({products.length} item{products.length > 1 ? 's' : ''}):
          </Text>
          <Text style={styles.priceSuperscript}>$</Text>
          <Text style={styles.price}>{totalPrice}</Text>
        </View>

        <Button
          onPress={() => navigation.navigate('AddressForm')}
          title={'Proceed to checkout'}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            boxType="square"
            onCheckColor="orange"
            onTintColor="orange"
          />
          <Text style={styles.label}>This order contains a gift</Text>
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
