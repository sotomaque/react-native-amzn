import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    alignItems: 'center',
    width: 130,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  button: {
    height: 35,
    width: 35,
    backgroundColor: '#d2d2d2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 18,
  },
  quantityContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  quantityLabel: {
    color: '#007eb9',
  },
});

export default styles;
