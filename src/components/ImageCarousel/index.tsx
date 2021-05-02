import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions, ViewToken } from 'react-native';

import styles from './styles';

type ImageCarouselProps = {
  images: string[];
};

type ViewableChangedPropsType = {
  viewableItems: ViewToken[];
};

const { width } = Dimensions.get('screen');

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(
    ({ viewableItems }: ViewableChangedPropsType) => {
      if (viewableItems.length > 0) {
        const selectedImage = viewableItems[0];
        typeof selectedImage?.index === 'number' &&
          setActiveIndex(selectedImage.index);
      }
    },
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <Image
            key={`${item}-${index}`}
            style={styles.image}
            source={{ uri: item }}
          />
        )}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}
      />
      {/* Dots */}
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                backgroundColor:
                  index === activeIndex ? 'rgb(233, 162, 51)' : '#c9c9c9',
              },
            ]}
            key={`${image}`}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
