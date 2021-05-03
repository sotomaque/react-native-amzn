import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const colorMap = {
  primary: 'rgb(243, 213, 54)',
  secondary: 'rgb(233, 162, 51)',
  outline: 'transparent',
};

const Button = ({ title, onPress, type, style, textStyle }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: type ? colorMap[type] : '',
          borderColor: type === 'outline' ? '#c2c2c2' : '',
          borderWidth: type === 'outline' ? 1 : 0,
        },
        {
          ...style,
        },
      ]}>
      <Text style={[styles.buttonLabel, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
