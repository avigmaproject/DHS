import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Header = ({onPress, Title, ...props}) => {
  return (
    <View
      style={{
        height: deviceHeight / 4,
        backgroundColor: '#4881DD',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 60,
        }}>
        <TouchableOpacity
          style={{marginLeft: 10, marginTop: -20}}
          onPress={onPress}>
          <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontWeight: '600',
            fontFamily: 'Poppins-Regular',
            color: '#FFFFFF',
            marginLeft: 10,
            marginTop: -20,
          }}>
          {Title}
        </Text>
        <TouchableOpacity style={{marginRight: 10, marginTop: -10}}>
          <Image
            source={{
              uri: 'https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          height: deviceHeight / 6,
          width: '80%',
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          marginBottom: 50,
          borderRadius: 10,
        }}>
        <View
          style={{
            height: deviceHeight / 8,
            width: '90%',
            backgroundColor: '#0095DA',
            marginTop: 15,
            marginBottom: 50,
            borderRadius: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/1.png')}
              style={{height: 80, width: 80, marginTop: 10}}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              right: 0,
              top: 5,
            }}>
            <Image
              source={require('../assets/Tag.png')}
              style={{
                height: 30,
                width: 70,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                fontSize: 10,
                lineHeight: 10,
                fontFamily: 'Poppins-Regular',
                color: '#FF2B88',
                right: 8,
                top: 10,
                fontWeight: '600',
              }}>
              50% OFF
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
