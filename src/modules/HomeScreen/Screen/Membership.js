import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import Header from '../../../components/Header';

const Membership = ({navigation, ...props}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header Title="Membership" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Basic Plan</Text>
            <View style={styles.plan}>
              <Text style={styles.plantext}>Free Plan</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 35,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>Online Appointment</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 23}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>0 Tests</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>24/7 support</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 75}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>DashBord</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="x-circle" size={20} color="#FF2B88" />
              <Text style={styles.desc}>Discount upto 50%</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 36}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>1 years valid</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.chooseButton}>
            <Text style={styles.chooseText}>Choose Plan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>PREMIUM</Text>
            <View style={styles.plan}>
              <Text style={styles.plantext}>Rs.200/-</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 35,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>Online Appointment</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 23}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>0 Tests</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>24/7 support</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 75}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>DashBord</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>Discount upto 50%</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 36}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>1 years valid</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.purchaseButton}>
            <Text style={styles.purchaseText}>Purchase Plan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>SILVER</Text>
            <View style={styles.plan}>
              <Text style={styles.plantext}>Rs.499/-</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 35,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>Online Appointment</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>24/7 support</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 75}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>DashBord</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>Discount upto 50%</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 36}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>1 years valid</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Feather name="check-circle" size={20} color="#4881DD" />
              <Text style={styles.desc}>
                8 Tests (H, W, BMI, BP, Pulse, SPO2T, BG )
              </Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.purchaseButton, {marginTop: 25}]}>
            <Text style={styles.purchaseText}>Purchase Plan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Membership;

const styles = StyleSheet.create({
  card: {
    height: 225,
    width: '90%',
    marginBottom: 30,
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#F5E1EE',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  title: {
    color: '#36596A',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    fontFamily: 'Poppins-Regular',
    left: 20,
    top: 20,
  },
  plan: {
    right: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: 30,
    backgroundColor: '#EDf1FC',
  },
  plantext: {
    color: '#4881DD',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
  desc: {
    color: '#A7AFBC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
    left: 10,
  },
  chooseButton: {
    width: '70%',
    height: 50,
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#F5E1EE',
  },
  chooseText: {
    color: '#FF2B88',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
  purchaseButton: {
    width: '70%',
    height: 50,
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#FF2B88',
  },
  purchaseText: {
    color: '#F5E1EE',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
});
