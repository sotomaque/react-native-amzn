import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { margin: 10, backgroundColor: 'white' },
  priceContainer: { flexDirection: 'row' },
  priceSuperscript: { fontSize: 15, fontWeight: '300' },
  price: { fontSize: 30, marginLeft: 2 },
  primeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primeImage: { width: 50, height: 30, resizeMode: 'contain' },
  primeLabel: { marginLeft: 10 },
  description: {
    margin: 10,
    lineHeight: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityLabel: { marginHorizontal: 10, fontSize: 15 },
  buttonGroup: { marginTop: 10 },
});

export default styles;
