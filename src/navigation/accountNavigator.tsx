import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../screens';
import { AccountStackParamList } from './types';

const AccountStack = createStackNavigator<AccountStackParamList>();
const AccountNavigator = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
