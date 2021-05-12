import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../screens';
import React from 'react';
const AccountStack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
