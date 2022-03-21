import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({onPress, text, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#FF2B88',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 18,
          lineHeight: 27,
          fontWeight: '600',
          fontFamily: 'Poppins-Regular',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
