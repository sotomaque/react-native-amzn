import { Picker } from '@react-native-picker/picker';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { states } from '../../data/states';
import { BottomSheet, Button, PickerTextInput } from '../../components';

const AddressFormScreen = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);
  const countries = countryList.getData();
  const [country, setCountry] = useState(countries[232].name);
  const [state, setState] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showStatePicker, setShowStatePicker] = useState(false);
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [secondaryAddress, setSecondaryAddress] = useState('');

  const handleClosePress = () => {
    if (bottomSheetRef.current) {
      setShowPicker(false);
      setShowStatePicker(false);
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
        // @ts-ignore
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          selectedValue={country}
          onValueChange={setCountry}>
          {countries.map((__country, index) => (
            <Picker.Item
              value={__country.name}
              key={`${__country.code}-${index}`}
              label={__country.name}
            />
          ))}
        </BottomSheet>
      )}

      {/* Country Input / Label */}
      <PickerTextInput
        label="Country"
        placeholder={country}
        onPress={() => setShowPicker(true)}
        rightArrowState={showPicker}
      />

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

      {/* City */}
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
          City
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
          value={city}
          onChangeText={text => setCity(text)}
          clearButtonMode="always"
          autoCorrect={false}
        />
      </View>

      {/* State Picker */}
      {showStatePicker && (
        // @ts-ignore
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          selectedValue={state}
          onValueChange={setState}>
          {states.map((_state, index) => (
            <Picker.Item
              value={_state.name}
              key={`${_state.abbreviation}-${index}`}
              label={_state.name}
            />
          ))}
        </BottomSheet>
      )}

      {/* State / Zip Code */}
      <View
        style={[styles.row, { margin: 10, justifyContent: 'space-between' }]}>
        <View style={{ flex: 1, marginRight: 5 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
            State
          </Text>

          <Pressable
            disabled={country !== 'United States of America'}
            style={[
              styles.row,
              {
                borderWidth: 1,
                borderColor: 'gray',
                height: 45,
                backgroundColor: 'rgb(240, 240, 240)',
                opacity: country === 'United States of America' ? 1 : 0.5,
                padding: 5,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'space-between',
              },
            ]}
            onPress={() => setShowStatePicker(true)}>
            <Text style={{ fontSize: 18, marginLeft: 5 }}>
              {state || 'Select'}
            </Text>
            {showStatePicker ? (
              <Icon name="up" size={18} />
            ) : (
              <Icon name="down" size={18} />
            )}
          </Pressable>
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={{ fontSize: 16, marginBottom: 5, fontWeight: '600' }}>
            City
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
            value={city}
            onChangeText={text => setCity(text)}
            clearButtonMode="always"
            autoCorrect={false}
          />
        </View>
      </View>

      {/* Make default */}

      {/* Button */}
      <Button
        title="Use this address"
        onPress={() => {}}
        style={{ marginHorizontal: 10 }}
      />
    </Pressable>
  );
};

export default AddressFormScreen;
