import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  subtotalContainer: { margin: 10 },
  subtotalLabel: { fontSize: 20 },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: { marginLeft: 10, fontSize: 16 },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  priceSuperscript: { fontSize: 15, fontWeight: '300' },
  price: { fontSize: 30, marginLeft: 2 },
});

export default styles;
