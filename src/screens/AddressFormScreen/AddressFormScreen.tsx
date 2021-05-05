import { Picker } from '@react-native-picker/picker';
import React, { useMemo, useRef, useState } from 'react';
import { View, Pressable } from 'react-native';
import styles from './styles';
import countryList from 'country-list';
import RNBottomSheet from '@gorhom/bottom-sheet';
import { states } from '../../data/states';
import {
  BottomSheet,
  Button,
  PickerTextInput,
  TextInput,
} from '../../components';

const AddressFormScreen = () => {
  // ref
  const bottomSheetRef = useRef<RNBottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);
  const countries = countryList.getData();
  const [country, setCountry] = useState(countries[232].name);
  const [state, setState] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showStatePicker, setShowStatePicker] = useState(false);
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
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
    <Pressable onPress={handleClosePress} style={styles.container}>
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
      <TextInput
        label="Full Name (First and Last Name)"
        onChangeText={setFullName}
        value={fullName}
      />

      {/* Address */}
      <TextInput
        label="Address"
        placeholder="Street address or P.O. Box"
        value={streetAddress}
        onChangeText={setStreetAddress}
        multiline
        placeholderBottom="Apt, Suite, Unit, Building (optional)"
        valueBottom={secondaryAddress}
        onChangeTextBottom={setSecondaryAddress}
      />

      {/* City */}
      <TextInput label="City" onChangeText={setCity} value={city} />

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
      <View style={styles.stateAndZipContainer}>
        <View style={styles.stateContainer}>
          <PickerTextInput
            label="State"
            placeholder={state || 'Select'}
            onPress={() => setShowStatePicker(true)}
            rightArrowState={showStatePicker}
          />
        </View>
        <View style={styles.zipContainer}>
          <TextInput label="Zip" onChangeText={setZip} value={zip} />
        </View>
      </View>

      {/* Make default */}

      {/* Button */}
      <Button
        title="Use this address"
        onPress={() => {}}
        style={styles.button}
      />
    </Pressable>
  );
};

export default AddressFormScreen;
