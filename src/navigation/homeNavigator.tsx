import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductScreen, SearchScreen } from '../screens';
import { HomeStackParamList } from './types';

const HomeStack = createStackNavigator<HomeStackParamList>();
const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={SearchScreen} />
      <HomeStack.Screen name="Product" component={ProductScreen} />
    </HomeStack.Navigator>
  );
};

export default Home;
