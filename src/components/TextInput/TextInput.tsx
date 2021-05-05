import React from 'react';
import { View, Text, TextInput as RNTextInput, ViewStyle } from 'react-native';

import styles from './styles';

type TextInputProps = {
  label: string;
  value: string;
  valueBottom?: string;
  placeholder?: string;
  placeholderBottom?: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  onChangeTextBottom?: React.Dispatch<React.SetStateAction<string>>;
  multiline?: boolean;
  style?: ViewStyle;
};

const TextInput = ({
  label,
  value,
  valueBottom,
  onChangeText,
  onChangeTextBottom,
  placeholder,
  placeholderBottom,
  multiline,
  style,
}: TextInputProps) => {
  if (multiline) {
    return (
      <View style={[styles.container, { ...style }]}>
        <Text style={styles.label}>{label}</Text>
        <RNTextInput
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
          style={styles.inputTop}
          value={value}
        />
        <RNTextInput
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={text =>
            onChangeTextBottom ? onChangeTextBottom(text) : null
          }
          placeholder={placeholderBottom}
          style={styles.inputBottom}
          value={valueBottom}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <RNTextInput
          autoCorrect={false}
          clearButtonMode="always"
          onChangeText={text => onChangeText(text)}
          placeholder={placeholder}
          style={styles.input}
          value={value}
        />
      </View>
    );
  }
};

export default TextInput;
