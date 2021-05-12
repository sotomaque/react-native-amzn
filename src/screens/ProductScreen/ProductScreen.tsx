import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, ImageCarousel, QuantitySelector } from '../../components';
import { useCart } from '../../context/cart';

import product from '../../data/product';
import styles from './styles';

const ProductScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [showPicker, setShowPicker] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    product?.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'addToCart', payload: id });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text numberOfLines={1}>{product.title}</Text>

      {/* Image Carousel */}
      <ImageCarousel images={product.images} />

      {/* Options Selector */}
      <Text onPress={() => setShowPicker(prev => !prev)}>Options</Text>
      {showPicker && (
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}>
          {product.options.map((option, idx) => (
            <Picker.Item key={`option-${idx}`} label={option} value={option} />
          ))}
        </Picker>
      )}

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceSuperscript}>$</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>

      {/* Prime Label */}
      <View style={styles.primeContainer}>
        <Image
          source={{
            uri:
              'https://www.webretailer.com/wp-content/uploads/2019/04/2.-Amazon-Prime-badge.png',
          }}
          style={styles.primeImage}
        />
        <Text style={styles.primeLabel}>&amp; FREE Returns</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity */}
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity</Text>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>

      {/* Button(s) */}
      <View style={styles.buttonGroup}>
        <Button title="Add to Cart" onPress={handleAddToCart} />
        <Button title="Buy Now" onPress={() => {}} type="secondary" />
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
