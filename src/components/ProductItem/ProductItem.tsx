import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { ProductType } from '../../types';
import { HomeStackParamList } from '../../navigation/types';
import styles from './styles';

type ProductItemProps = {
  navigation: StackNavigationProp<HomeStackParamList, 'Product'>;
  product: ProductType;
};

const ProductItem = ({ navigation, product }: ProductItemProps) => {
  const {
    image: uri,
    title,
    avgRating: rating,
    ratings: ratingsCount,
    price,
    prevPrice = '',
  } = product;

  const handlePress = () => {
    navigation.navigate('Product', { id: product.id });
  };

  return (
    <Pressable onPress={handlePress} style={styles.root}>
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
    </Pressable>
  );
};

export default ProductItem;
