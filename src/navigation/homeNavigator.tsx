import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProductScreen, AddressFormScreen, SearchScreen } from '../screens';
import { RootStackParamList } from './types';

const HomeStack = createStackNavigator<RootStackParamList>();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SearchScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default Home;
