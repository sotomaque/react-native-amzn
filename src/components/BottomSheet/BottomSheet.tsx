import React, { ForwardedRef } from 'react';
import { View } from 'react-native';
import RNBottomSheet from '@gorhom/bottom-sheet';
import { Picker } from '@react-native-picker/picker';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import styles from './styles';

type BottomSheetProps = {
  inputRef: ForwardedRef<unknown>;
  snapPoints: string[];
  selectedValue: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactChildren | Element[];
};

const BottomSheet = ({
  inputRef,
  snapPoints,
  selectedValue,
  onValueChange,
  children,
}: BottomSheetProps) => {
  return (
    <RNBottomSheet
      style={styles.sheet}
      animateOnMount={true}
      ref={inputRef as React.RefObject<BottomSheetMethods>}
      snapPoints={snapPoints}>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}>
          {children}
        </Picker>
      </View>
    </RNBottomSheet>
  );
};

export default React.forwardRef((props, ref) => {
  // @ts-ignore
  return <BottomSheet {...props} inputRef={ref} />;
});
