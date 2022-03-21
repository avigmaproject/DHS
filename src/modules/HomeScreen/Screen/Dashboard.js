import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../../components/Header';

const Data = [
  {
    Id: 1,
    Title: 'Makiyah Yeager',
    Location: 'Mohali, Punjab',
    Date: '8 Feb 2022',
    Desc: 'Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.',
    Status: 1,
  },
  {
    Id: 2,
    Title: 'David Smith',
    Location: 'Mohali, Punjab',
    Date: '8 Feb 2022',
    Desc: 'Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.',
    Status: 1,
  },
  {
    Id: 3,
    Title: 'Juan Carlos',
    Location: 'Mohali, Punjab',
    Date: '8 Feb 2022',
    Desc: 'Lorem Ipsum Lorem Ipsum is simply dummy text of the printing.',
    Status: 1,
  },
];

const Dashboard = ({navigation, ...props}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.title}>{item.Title}</Text>
          <View style={styles.box}>
            <Text style={styles.status}>Status Confirm</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="md-location-outline" size={25} color="#4881DD" />
            <Text style={[styles.descText, {marginLeft: 5}]}>
              {item.Location}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <AntDesign name="calendar" size={25} color="#4881DD" />
            <Text style={[styles.descText, {marginLeft: 10}]}>{item.Date}</Text>
          </View>
        </View>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <Text style={styles.descText}>{item.Desc}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header Title="Dashboard" onPress={() => navigation.goBack()} />
      <View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Search here"
        />
        <Ionicons
          name="search-outline"
          size={30}
          color="#ABAEBE"
          style={styles.search}
        />
      </View>
      <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={styles.title}>Booking List</Text>
      </View>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.Id}
        contentContainerStyle={{
          marginLeft: 20,
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: -20,
    width: '85%',
    alignSelf: 'center',
  },
  search: {
    position: 'absolute',
    right: 40,
    bottom: 20,
  },
  title: {
    color: '#36596A',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    fontFamily: 'Poppins-Regular',
  },
  card: {
    height: 150,
    width: '90%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 8,
  },
  status: {
    color: '#24BB2A',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 35,
    backgroundColor: '#E9F8EA',
  },
  descText: {
    color: '#A7AFBC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
});
