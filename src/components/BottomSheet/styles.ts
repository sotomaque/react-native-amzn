import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pickerContainer: { flex: 1, alignItems: 'center' },
  picker: {
    width: '100%',
  },
});

export default styles;
