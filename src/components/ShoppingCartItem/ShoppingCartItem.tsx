import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import QuantitySelector from '../QuantitySelector';
import { CartItemType } from '../../types';
import styles from './styles';

type ShoppingCartItemProps = {
  cartItem: CartItemType;
};

const ShoppingCartItem = ({ cartItem }: ShoppingCartItemProps) => {
  const { quantity: quantityProp } = cartItem;
  const {
    image: uri,
    title,
    avgRating: rating,
    ratings: ratingsCount,
    price,
    prevPrice = '',
  } = cartItem.item;

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
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {/* Full Star ratings */}
            {Array(Math.floor(rating))
              .fill(0)
              .map(_ => (
                <FontAwesome
                  name="star"
                  style={styles.star}
                  size={18}
                  color="#e47911"
                />
              ))}
            {/* Half-Star Ratings */}
            {rating % 1 !== 0 && rating % 1 >= 0.5 && (
              <FontAwesome
                name="star-half-empty"
                style={styles.star}
                size={18}
                color="#e47911"
              />
            )}

            {/* Remainder */}
            {Array(
              5 - (rating % 1 >= 0.5 ? Math.ceil(rating) : Math.floor(rating)),
            )
              .fill(0)
              .map(_ => (
                <FontAwesome
                  name="star-o"
                  style={styles.star}
                  size={18}
                  color="#e47911"
                />
              ))}

            <Text style={styles.ratingLabel}>{ratingsCount}</Text>
          </View>
          {/* Price */}
          <Text style={styles.price}>
            from ${price}
            {'  '}
            {prevPrice && <Text style={styles.oldPrice}>${prevPrice}</Text>}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default ShoppingCartItem;