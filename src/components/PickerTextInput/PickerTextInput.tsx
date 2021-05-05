import React from 'react';
import { View, Text, Pressable } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/AntDesign';

import styles from './styles';

type PickerTextInputProps = {
  label: string;
  onPress: () => any;
  placeholder: string;
  rightArrowState?: boolean;
  disabled?: boolean;
};

const PickerTextInput = ({
  label,
  onPress,
  placeholder,
  rightArrowState,
  disabled,
}: PickerTextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        style={[
          styles.pressable,
          // eslint-disable-next-line react-native/no-inline-styles
          { backgroundColor: disabled ? 'lightgray' : 'white' },
        ]}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.placeholderLabel}>{!disabled && placeholder}</Text>
        {!disabled ? (
          rightArrowState ? (
            <Icon name="up" size={18} />
          ) : (
            <Icon name="down" size={18} />
          )
        ) : null}
      </Pressable>
    </View>
  );
};

export default PickerTextInput;
