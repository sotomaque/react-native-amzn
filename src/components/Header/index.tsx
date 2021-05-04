import React from 'react';
import { View, Text, ViewProps } from 'react-native';

type Props = ViewProps & {
  tintColor?: string;
  children?: string;
};

const Header = ({ ...rest }: Props) => {
  return (
    <View {...rest}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
