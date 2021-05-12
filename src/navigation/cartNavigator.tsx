import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AddressFormScreen,
  ProductScreen,
  ShoppingCartScreen,
} from '../screens';

import { CartStackParamList } from './types';

const CartStack = createStackNavigator<CartStackParamList>();
const CartNavigator = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={ShoppingCartScreen} />
      <CartStack.Screen name="Product" component={ProductScreen} />
      <CartStack.Screen name="AddressForm" component={AddressFormScreen} />
    </CartStack.Navigator>
  );
};

export default CartNavigator;
