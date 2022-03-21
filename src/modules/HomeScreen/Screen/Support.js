import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const Support = ({navigation, ...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header Title="Support" onPress={() => navigation.goBack()} />
      <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={styles.title}>Message to Admin</Text>
      </View>
      <View style={{marginTop: 20}}>
        <TextInput label="Email Address" />
      </View>
      <View style={{marginTop: 20}}>
        <TextInput label="Short Description" multiline={true} />
      </View>
      <View style={{marginTop: 75}}>
        <Button text="Submit" />
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  title: {
    color: '#36596A',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    fontFamily: 'Poppins-Regular',
  },
});
