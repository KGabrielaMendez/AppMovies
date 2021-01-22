import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputTextSearch = ({ value, placeholder, onChangeText }) => (
  <TextInput
    style={styles.input}
    value={value}
    placeholder={placeholder}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: { height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 5 },
});

export default InputTextSearch;