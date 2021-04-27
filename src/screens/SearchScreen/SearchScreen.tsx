import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product */}
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
          <Text style={styles.price}>from $13.59</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  container: {
    padding: 10,
    flex: 5,
  },

  image: {
    flex: 3,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  star: {
    margin: 1,
  },
  ratingLabel: {
    paddingHorizontal: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
