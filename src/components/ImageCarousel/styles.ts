import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: width,
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    marginHorizontal: 10,
  },
});
export default styles;
