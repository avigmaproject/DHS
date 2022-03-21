import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import DrawerContent from '../../components/DrawerContent';
import HomeScreen from '../../modules/HomeScreen/Screen/HomeScreen';
import {BottomTab} from '../Bottom/BottomTab';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  );
};
