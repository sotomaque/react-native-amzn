import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen, ProductScreen, AddressFormScreen } from '../screens';
import { RootStackParamList } from './types';

const HomeStack = createStackNavigator<RootStackParamList>();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
      <HomeStack.Screen name="AddressForm" component={AddressFormScreen} />
    </HomeStack.Navigator>
  );
};

export default Home;
