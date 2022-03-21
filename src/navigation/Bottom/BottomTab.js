import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../modules/HomeScreen/Screen/HomeScreen';
import Hospitals from '../../modules/Hospitals/Screen/Hospitals';
import Specialities from '../../modules/Specialities/Screen/Specialities';
import Notification from '../../modules/Notification/Notification';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  let heightbar;
  if (deviceHeight > 700) {
    heightbar = deviceHeight / 10.5;
  } else {
    heightbar = 49;
  }
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Hospitals') {
            iconName = 'newspaper-outline';
          } else if (route.name === 'Specialities') {
            iconName = 'chatbubble-ellipses-outline';
          } else if (route.name === 'Notification') {
            iconName = 'notifications-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4881DD',
        tabBarInactiveTintColor: '#ABAEBE',
        tabBarLabelStyle: {
          fontSize: 14,
          lineHeight: 21,
          fontWeight: '400',
          fontFamily: 'Poppins-Regular',
        },
        tabBarStyle: {
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
      <Tab.Screen name="Specialities" component={Specialities} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};
