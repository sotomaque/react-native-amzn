import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderColor: '#d1d1d1',
    borderTopWidth: 1,
    paddingTop: 10,
    margin: 10,
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
    marginTop: 5,
  },
  primeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primeImage: {
    width: 50,
    height: 30,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  inStockLabel: { color: 'green' },
  deleteButton: { marginLeft: 30, padding: 10 },
  deleteLabel: { fontSize: 12 },
  saveForLaterButton: { marginLeft: 10, padding: 10 },
});

export default styles;
