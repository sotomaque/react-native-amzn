import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderColor: '#d1d1d1',
    borderWidth: 1,
  },
  body: {
    flexDirection: 'row',
  },
  container: {
    padding: 10,
    flex: 3,
  },
  image: {
    flex: 2,
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
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    marginLeft: 5,
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityLabel: { fontSize: 16, marginLeft: 20, marginRight: 10 },
});

export default styles;
