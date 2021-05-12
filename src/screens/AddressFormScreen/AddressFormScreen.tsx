import { Picker } from '@react-native-picker/picker';
import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import countryList from 'country-list';
import RNBottomSheet from '@gorhom/bottom-sheet';

import { states } from '../../data/states';
import {
  BottomSheet,
  Button,
  PickerTextInput,
  TextInput,
} from '../../components';
import styles from './styles';

const AddressFormScreen = () => {
  const headerHeight = useHeaderHeight();

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight}>
      <ScrollView>
        <Pressable onPress={handleClosePress} style={styles.container}>
          {/* Country Picker */}
          {showPicker && (
            <View style={styles.sheetContainer}>
              {
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
              }
            </View>
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
            <View style={styles.sheetContainer}>
              {
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
              }
            </View>
          )}

          {/* State / Zip Code */}
          <View style={styles.stateAndZipContainer}>
            <View style={styles.stateContainer}>
              <PickerTextInput
                label="State"
                placeholder={state || 'Select'}
                onPress={() => setShowStatePicker(true)}
                rightArrowState={showStatePicker}
                disabled={country !== 'United States of America'}
              />
            </View>
            <View style={styles.zipContainer}>
              <TextInput label="Zip" onChangeText={setZip} value={zip} />
            </View>
          </View>

          {/* Button */}
          <Button
            title="Use this address"
            onPress={() => {}}
            style={styles.button}
          />
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressFormScreen;
