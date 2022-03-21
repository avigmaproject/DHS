import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput as Input} from 'react-native-paper';
const TextInput = ({
  onChangeText,
  placeholder,
  value,
  label,
  secureTextEntry,
  keyboardType,
  editable,
  multiline,
  ...props
}) => {
  return (
    <Input
      label={label}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      editable={editable}
      multiline={multiline}
      mode="outlined"
      outlineColor="#F4F4F4"
      autoCapitalize="none"
      style={{
        width: '90%',
        alignSelf: 'center',
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
      }}
      theme={{
        colors: {
          placeholder: '#ACACAC',
          text: '#36596A',
          primary: '#ABAEBE',
          underlineColor: 'transparent',
          background: '#FDFDFD',
        },
      }}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderWidth: 1,
  },
});
