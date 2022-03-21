import React from 'react';

import SplashScreen from '../../modules/SplashScreen/SplashScreen';
import Boarding from '../../modules/OnBoardingScreen/Boarding';
import Hospital_Details from '../../modules/Hospitals/Screen/Hospital_Details';
import Product_Detail from '../../modules/Hospitals/Screen/Product_Detail';
import Verification from '../../modules/Hospitals/Screen/Verification';
import Book_Appointment from '../../modules/Hospitals/Screen/Book_Appointment';
import Payment_Method from '../../modules/Payment/Screens/Payment_Method';
import Add_Card from '../../modules/Payment/Screens/Add_Card';
import Personal_Information from '../../modules/HomeScreen/Screen/Personal_Information';
import Dashboard from '../../modules/HomeScreen/Screen/Dashboard';
import Membership from '../../modules/HomeScreen/Screen/Membership';
import Support from '../../modules/HomeScreen/Screen/Support';

import {DrawerNavigation} from '../Drawer/DrawerStack';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="Boarding" component={Boarding} />
    </AuthStack.Navigator>
  );
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack.Screen name="Hospital_Details" component={Hospital_Details} />
      <Stack.Screen
        name="Personal_Information"
        component={Personal_Information}
      />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Membership" component={Membership} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Product_Detail" component={Product_Detail} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Book_Appointment" component={Book_Appointment} />
      <Stack.Screen name="Payment_Method" component={Payment_Method} />
      <Stack.Screen name="Add_Card" component={Add_Card} />
    </Stack.Navigator>
  );
};
