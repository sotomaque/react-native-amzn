import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, TextInput, Animated } from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import BottomSheet from '@gorhom/bottom-sheet';

const AddressFormScreen = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const countries = countryList.getData();
  const [country, setCountry] = useState(countries[0].name);
  const [showPicker, setShowPicker] = useState(false);
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [secondaryAddress, setSecondaryAddress] = useState('');
  const handleClosePress = () => {
    if (bottomSheetRef.current) {
      setShowPicker(false);
      bottomSheetRef.current.close();
    }
  };

  return (
    <Pressable
      onPress={handleClosePress}
      style={{
        backgroundColor: 'rgb(241, 241, 241)',
        height: '100%',
      }}>
      {/* Country Picker */}
      {showPicker && (
        <BottomSheet
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          animateOnMount={true}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{ flex: 1, alignItems: 'center' }}>
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
        </BottomSheet>
      )}

      {/* Country Input / Label */}
      <View style={{ margin: 10 }}>
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
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
          Full Name (First and Last Name)
        </Text>

        <TextInput
          style={{
            fontSize: 18,
            paddingLeft: 10,
            borderWidth: 1,
            borderColor: 'gray',
            height: 45,
            backgroundColor: 'white',
            borderRadius: 5,
          }}
          value={fullName}
          onChangeText={text => setFullName(text)}
          clearButtonMode="always"
          autoCorrect={false}
        />
      </View>

      {/* Address */}
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
          Address
        </Text>

        <TextInput
          style={{
            fontSize: 18,
            paddingLeft: 10,
            borderWidth: 1,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderColor: 'gray',
            height: 45,
            backgroundColor: 'white',
          }}
          placeholder="Street address or P.O. Box"
          value={streetAddress}
          onChangeText={text => setStreetAddress(text)}
          clearButtonMode="always"
          autoCorrect={false}
        />
        <TextInput
          style={{
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
          }}
          placeholder="Apt, Suite, Unit, Building (optional)"
          value={secondaryAddress}
          onChangeText={text => setSecondaryAddress(text)}
          clearButtonMode="always"
          autoCorrect={false}
        />
      </View>
    </Pressable>
  );
};

export default AddressFormScreen;
