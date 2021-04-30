import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ProductItem = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text numberOfLines={3} style={styles.title}>
          Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          <FontAwesome
            name="star"
            style={styles.star}
            size={18}
            color="#e47911"
          />
          <FontAwesome
            name="star-half-empty"
            style={styles.star}
            size={18}
            color="#e47911"
          />
          <FontAwesome
            name="star-o"
            style={styles.star}
            size={18}
            color="#e47911"
          />
          <FontAwesome
            name="star-o"
            style={styles.star}
            size={18}
            color="#e47911"
          />
          <FontAwesome
            name="star-o"
            style={styles.star}
            size={18}
            color="#e47911"
          />
          <Text style={styles.ratingLabel}>11234</Text>
        </View>
        {/* Price */}
        <Text style={styles.price}>
          from $13.59{'  '}
          <Text style={styles.oldPrice}>$16.22</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
