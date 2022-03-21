import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/Feather';

import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const Personal_Information = ({navigation, ...props}) => {
  const [openGender, setOpenGender] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [valueGender, setValueGender] = useState(null);
  const [value, setValue] = useState(null);
  const [valueCountry, setValueCountry] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Female', value: 'female'},
    {label: 'Male', value: 'male'},
  ]);
  const [bloodgroup, setBloodgroup] = useState([
    {label: 'A', value: 'a'},
    {label: 'B', value: 'b'},
  ]);
  const [country, setCountry] = useState([
    {label: 'India', value: 'india'},
    {label: 'Russia', value: 'russia'},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header Title="Personal Info" onPress={() => navigation.goBack()} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={styles.header}>Set Profile</Text>
        </View>
        <View style={{marginTop: 20}}>
          <TextInput label="First Name*" />
        </View>
        <View style={styles.view}>
          <TextInput label="Phone No.*" />
        </View>
        <View style={{marginTop: 20}}>
          <DropDownPicker
            open={open}
            value={value}
            items={bloodgroup}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setGender}
            placeholder="Blood Group"
            dropDownDirection="TOP"
            style={styles.dropdownstyle}
            containerStyle={styles.dropdowncontainer}
            labelStyle={styles.dropdownLabel}
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>
        <View style={{marginTop: 20}}>
          <DropDownPicker
            open={openGender}
            value={valueGender}
            items={gender}
            setOpen={setOpenGender}
            setValue={setValueGender}
            setItems={setGender}
            placeholder="Gender"
            dropDownDirection="TOP"
            style={styles.dropdownstyle}
            containerStyle={styles.dropdowncontainer}
            labelStyle={styles.dropdownLabel}
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>
        <View style={styles.view}>
          <TextInput label="Address" />
        </View>
        <View style={styles.view}>
          <TextInput label="City" />
        </View>
        <View style={styles.view}>
          <TextInput label="State" />
        </View>
        <View style={{marginTop: 20}}>
          <DropDownPicker
            open={openCountry}
            value={valueCountry}
            items={country}
            setOpen={setOpenCountry}
            setValue={setValueCountry}
            setItems={setCountry}
            placeholder="Country"
            dropDownDirection="TOP"
            style={styles.dropdownstyle}
            containerStyle={styles.dropdowncontainer}
            labelStyle={styles.dropdownLabel}
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>
        <View style={styles.view}>
          <TextInput label="Short Description" multiline={true} />
        </View>
        <View style={styles.upload}>
          <Feather
            name="upload-cloud"
            color="#4881DD"
            size={30}
            style={{bottom: 5}}
          />
          <Text
            style={{
              color: '#ABAEBE',
              fontSize: 12,
              lineHeight: 18,
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
            }}>
            Upload your photo
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#4881DD',
                fontSize: 14,
                lineHeight: 21,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              Choose File
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30, marginBottom: 30}}>
          <Button text="Update Profile" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Personal_Information;

const styles = StyleSheet.create({
  header: {
    color: '#36596A',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',
  },
  view: {marginTop: 10},
  dropdownstyle: {
    borderColor: 'transparent',
    height: 55,
    borderRadius: 0,
  },
  dropdowncontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  dropdownLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#36596A',
  },
  dropdownPlaceholder: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    color: '#ABAEBE',
  },
  upload: {
    width: '90%',
    height: 125,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
