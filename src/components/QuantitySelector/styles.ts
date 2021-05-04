import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgb(184, 185, 190)',
    alignItems: 'center',
    width: 130,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  button: {
    height: 35,
    width: 35,
    backgroundColor: 'rgb(233, 234, 238)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,

    borderColor: 'rgb(184, 185, 190)',
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
