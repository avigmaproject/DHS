import {Text, StyleSheet, View, Dimensions, Image} from 'react-native';
import React, {Component} from 'react';
import Header from '../Components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Product_Detail extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Header onPress={() => navigation.goBack()} Title="Product Detail" />
        <View style={styles.background}>
          <View style={styles.Aorta}>
            <Image source={require('../assets/Aorta.png')} />
          </View>
          <View style={{marginTop: 30, marginLeft: 30}}>
            <Text style={styles.signin}>Sign In To </Text>
            <Text style={styles.signin}>Your Account</Text>
          </View>
          <View style={{marginTop: 30, marginLeft: 30}}>
            <Text style={styles.desc}>Please sign in to enter in a app</Text>
          </View>
          <View style={{marginTop: 30}}>
            <TextInput label="Phone Number" keyboardType="numeric" />
          </View>
          <View style={{marginTop: 30}}>
            <Button
              text="Send"
              onPress={() => navigation.navigate('Verification')}
            />
          </View>
        </View>
      </View>
    );
  }
}

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
});
