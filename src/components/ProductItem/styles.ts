import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  container: {
    padding: 10,
    flex: 5,
  },

  image: {
    flex: 3,
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
});

export default styles;
