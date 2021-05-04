import { RootStackParamList } from './types';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen, ShoppingCartScreen } from '../screens';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';
import { Header } from '../components';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerTitle: props => <Header {...props} /> }}
        name="Cart"
        component={ShoppingCartScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
