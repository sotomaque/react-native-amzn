import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { margin: 10 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: '600' },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputTop: {
    fontSize: 18,
    paddingLeft: 10,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: 'gray',
    height: 45,
    backgroundColor: 'white',
  },
  inputBottom: {
    fontSize: 18,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: 'gray',
    height: 45,
    backgroundColor: 'white',
  },
});

export default styles;
