import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
};

const Button = ({ title, onPress, type }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor:
            type === 'primary' ? 'rgb(243, 213, 54)' : 'rgb(233, 162, 51)',
        },
      ]}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
