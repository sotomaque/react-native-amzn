import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(241, 241, 241)',
    height: '100%',
  },
  sheetContainer: {
    position: 'absolute',
    zIndex: 100,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  stateAndZipContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  stateContainer: { flex: 1, marginRight: 5 },
  zipContainer: { flex: 1, marginLeft: 5 },
  button: { marginHorizontal: 10 },
});

export default styles;
