import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const AddressFormScreen = () => {
  const countries = countryList.getData();
  const [country, setCountry] = useState(countries[0].name);
  const [showPicker, setShowPicker] = useState(true);
  console.log(country);
  return (
    <View
      style={{
        backgroundColor: 'rgb(241, 241, 241)',
        height: '100%',
        margin: 10,
      }}>
      {/* Country Picker */}
      {showPicker && (
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            height: '100%',
            width: '110%',
            margin: -10,
          }}>
          <Pressable
            style={{
              backgroundColor: '#bfbcb4',
              opacity: 0.5,
              height: Dimensions.get('screen').height - 305,
              width: '100%',
            }}
            onPress={() => setShowPicker(false)}
          />
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={{
              width: '100%',
            }}>
            {countries.map((country, index) => (
              <Picker.Item
                value={country.name}
                key={`${country.code}-${index}`}
                label={country.name}
              />
            ))}
            <Picker.Item value="United States" label="United States" />
          </Picker>
        </View>
      )}
      <View>
        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
          Country
        </Text>
        <Pressable
          style={[
            styles.row,
            {
              borderWidth: 1,
              borderColor: 'gray',
              height: 45,
              backgroundColor: 'white',
              padding: 5,
              alignItems: 'center',
              borderRadius: 5,
              justifyContent: 'space-between',
            },
          ]}
          onPress={() => setShowPicker(true)}>
          <Text style={{ fontSize: 18, marginLeft: 5 }}>{country}</Text>
          {showPicker ? (
            <Icon name="up" size={18} />
          ) : (
            <Icon name="down" size={18} />
          )}
        </Pressable>
      </View>

      {/* Full Name */}
      <View style={styles.row}>
        {/* Label */}
        <Text>Full Name (first and last)</Text>
        {/* Input */}
      </View>
      <View style={styles.row}>
        <Text>dummy text</Text>
      </View>
    </View>
  );
};

export default AddressFormScreen;
