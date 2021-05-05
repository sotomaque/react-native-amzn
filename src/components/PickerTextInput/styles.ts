import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '600' },
  pressable: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  placeholderLabel: { fontSize: 18, marginLeft: 5 },
});

export default styles;
