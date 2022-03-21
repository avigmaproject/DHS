import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../Components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../Hospitals/Components/Button';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Payment_Method extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Header Title="Payment Method" onPress={() => navigation.goBack()} />
        <ScrollView>
          <View
            style={{
              alignSelf: 'center',
              height: deviceHeight / 9,

              width: '90%',
              backgroundColor: '#FFFFFF',
              marginTop: 65,
              borderRadius: 10,
            }}>
            <View
              style={{
                marginLeft: 20,
                flexDirection: 'row',
                marginTop: 25,
                alignItems: 'center',
              }}>
              <Image source={require('../Assets/Paytm.png')} />
              <View style={{marginLeft: 20}}>
                <Text style={styles.Payment}>UPI Payment</Text>
                <Text style={styles.upi}>7777777777@paytm</Text>
              </View>
            </View>
          </View>
          <View style={{marginLeft: 20, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Add_Card')}>
              <Text style={styles.add}>+ Add New Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <View style={{marginTop: 20, marginLeft: 20}}>
              <Text style={styles.gopremium}>Go with Premium Plan</Text>
            </View>
            <View style={{marginTop: 20, marginLeft: 20}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>Go with Primum Plan and get </Text>
                <Text style={styles.text2}>50%</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text1}>more discount. </Text>
                <Text style={styles.text2}>Get Primun Plan</Text>
              </View>
            </View>
            <View style={styles.bottom1}>
              <View style={{marginTop: 20, marginLeft: 20}}>
                <Text style={styles.gopremium}>Apply Promo Code</Text>
              </View>
              <View style={{marginTop: 10}}>
                <TextInput label="Promo code" />
              </View>
              <View
                style={{
                  padding: 25,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.amount}>Total Amount</Text>
                <Text style={styles.amount}>Rs. 250.00</Text>
              </View>
              <Button text="Continue Payment" />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Payment: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    color: '#36596A',
    fontWeight: '600',
  },
  upi: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
    color: '#A7AFBC',
    fontWeight: '400',
  },
  add: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    color: '#4881DD',
    fontWeight: '500',
  },
  bottom: {
    height: deviceHeight,
    width: deviceWidth,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  gopremium: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: 'Poppins-Regular',
    color: '#36596A',
    fontWeight: '600',
  },
  text1: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    color: '#A7AFBC',
    fontWeight: '400',
  },
  text2: {
    fontSize: 16,
    lineHeight: 24,
    color: '#F94597',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
  },
  bottom1: {
    height: deviceHeight,
    width: deviceWidth,
    marginTop: 40,
    backgroundColor: '#E5E5E5',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  amount: {
    fontSize: 18,
    lineHeight: 27,
    color: '#4881DD',
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
});
