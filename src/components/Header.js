import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Header = ({onPress, Title, ...props}) => {
  return (
    <View
      style={{
        height: deviceHeight / 6,
        backgroundColor: '#4881DD',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 60,
        }}>
        <TouchableOpacity style={{marginLeft: 10}} onPress={onPress}>
          <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            fontWeight: '700',
            fontFamily: 'Poppins-Regular',
            color: '#FFFFFF',
            marginLeft: 10,
          }}>
          {Title}
        </Text>
        <TouchableOpacity style={{marginRight: 10}}>
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
    </View>
  );
};

export default Header;
