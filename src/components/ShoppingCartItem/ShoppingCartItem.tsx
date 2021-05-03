import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import QuantitySelector from '../QuantitySelector';
import { CartItemType } from '../../types';
import styles from './styles';
import { Button } from '..';

type ShoppingCartItemProps = {
  cartItem: CartItemType;
};

const ShoppingCartItem = ({ cartItem }: ShoppingCartItemProps) => {
  const { quantity: quantityProp } = cartItem;
  const { image: uri, title, price } = cartItem.item;

  const [quantity, setQuantity] = useState(quantityProp);

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>

          {/* Prime Label */}
          <View style={styles.primeContainer}>
            {/* Price */}
            <Text style={styles.price}>${price}</Text>
            <Image
              source={{
                uri:
                  'https://www.webretailer.com/wp-content/uploads/2019/04/2.-Amazon-Prime-badge.png',
              }}
              style={styles.primeImage}
            />
          </View>

          {/* In Stock Label */}
          <Text style={styles.inStockLabel}>In Stock</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        <Button
          style={styles.deleteButton}
          onPress={() => {}}
          title="Delete"
          type="outline"
          textStyle={styles.deleteLabel}
        />
        <Button
          style={styles.saveForLaterButton}
          onPress={() => {}}
          title="Safe for later"
          type="outline"
          textStyle={styles.deleteLabel}
        />
      </View>
    </View>
  );
};

export default ShoppingCartItem;
