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
};

const PickerTextInput = ({
  label,
  onPress,
  placeholder,
  rightArrowState,
}: PickerTextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Text style={styles.placeholderLabel}>{placeholder}</Text>
        {rightArrowState ? (
          <Icon name="up" size={18} />
        ) : (
          <Icon name="down" size={18} />
        )}
      </Pressable>
    </View>
  );
};

export default PickerTextInput;
