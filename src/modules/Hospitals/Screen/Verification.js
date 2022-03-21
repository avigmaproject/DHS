import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Header from '../Components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CELL_COUNT = 4;

const Verification = ({navigation, ...props}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header onPress={() => navigation.goBack()} Title="Product Detail" />
      <View style={styles.background}>
        <View style={styles.Aorta}>
          <Image source={require('../assets/Aorta.png')} />
        </View>
        <View style={{marginTop: 30, marginLeft: 30}}>
          <Text style={styles.signin}>Verification</Text>
        </View>
        <View style={{marginTop: 30, marginLeft: 30}}>
          <Text style={styles.desc}>
            Enter verification code that we send to +917707898775
          </Text>
        </View>
        <View style={{padding: 20}}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text style={styles.desc}>Auto detecting code, Resend </Text>
          <Text style={styles.desc}>in 30 seconds.</Text>
          <View style={{marginTop: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Book_Appointment')}
              style={{borderBottomWidth: 1, borderColor: '#4881DD'}}>
              <Text style={styles.resend}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FFFFFF',
    marginTop: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Aorta: {
    alignItems: 'center',
    marginTop: 30,
  },
  signin: {
    color: '#36596A',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    fontFamily: 'Poppins-Regular',
  },
  desc: {
    color: '#A7AFBC',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 50,
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
    borderColor: '#E3E3E3',
    textAlign: 'center',
  },
  resend: {
    color: '#4881DD',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26,
    fontFamily: 'Poppins-Regular',
  },
});

export default Verification;
