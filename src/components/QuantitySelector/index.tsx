import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

type QuantitySelectorProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        disabled={quantity === 1}
        style={styles.button}
        onPress={() => setQuantity(prev => Math.max(1, prev - 1))}>
        <Text style={styles.buttonLabel}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>{quantity}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setQuantity(prev => prev + 1)}>
        <Text style={styles.buttonLabel}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
