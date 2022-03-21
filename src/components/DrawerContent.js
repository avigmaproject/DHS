import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Divider,
  List,
} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {setUserType} from '../store/action/auth/action';
import {connect} from 'react-redux';

class DrawerContent extends Component {
  Logout = () => {
    this.props.setUserType(false);
  };
  render() {
    const {navigation} = this.props;
    return (
      <DrawerContentScrollView
        contentContainerStyle={{
          backgroundColor: '#000000',
          flex: 1,
          opacity: 0.95,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.HeaderText}>Hi, Monroe Bond</Text>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <AntDesign
              name="close"
              size={30}
              color="#FFFFFF"
              style={{top: 2}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 25,
            flexDirection: 'row',
          }}>
          <View style={styles.circle}>
            <Text style={styles.letter}>M</Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.profiletext}>Makiyah Yeager</Text>
            <Text style={styles.profiletext}>+917707898775</Text>
          </View>
          <TouchableOpacity style={styles.circle2}>
            <Text style={styles.letter}>
              <EvilIcons
                name="pencil"
                size={30}
                color="#FFFFFF"
                style={{top: 2}}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <Divider style={styles.divider} />
        <Drawer.Section>
          <Title
            onPress={() => this.props.navigation.navigate('Dashboard')}
            style={styles.labelStyle}>
            Dashboard
          </Title>
          <Caption style={styles.caption}>Last booking 12/01/2022</Caption>
          {/* <Entypo
            name="chevron-right"
            size={30}
            color="#FFFFFF"
            style={styles.chevron}
          /> */}
          <Divider style={styles.divider} />
          <Title
            onPress={() =>
              this.props.navigation.navigate('Personal_Information')
            }
            style={styles.labelStyle}>
            Personal Information
          </Title>
          <Caption style={styles.caption}>Last update 10/01/2022</Caption>

          <Divider style={styles.divider} />
          <Title
            onPress={() => this.props.navigation.navigate('Membership')}
            style={styles.labelStyle}>
            Membership
          </Title>
          <Caption style={styles.caption}>Current Plan Sliver</Caption>
          <Divider style={styles.divider} />
          <Title
            // onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={styles.labelStyle}>
            Refer To
          </Title>
          <Caption style={styles.caption}>Credits 20</Caption>
          <Divider style={styles.divider} />
          <Title
            onPress={() => this.props.navigation.navigate('Support')}
            style={styles.labelStyle}>
            Support
          </Title>
          <Caption style={styles.caption}>Message to Admin</Caption>
          <Divider style={styles.divider} />
          <Title onPress={() => this.Logout()} style={styles.labelStyle}>
            Logout
          </Title>
          <Divider style={{backgroundColor: '#FFFFFF', marginTop: 35}} />
        </Drawer.Section>
      </DrawerContentScrollView>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    paddingHorizontal: 15,
    marginTop: 25,
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    left: 5,
    fontFamily: 'Poppins-Regular',
  },
  HeaderText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 33,
    fontFamily: 'Poppins-Regular',
  },
  profiletext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  letter: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    fontFamily: 'Poppins-Regular',
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#4881DD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle2: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  caption: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    paddingHorizontal: 15,
    marginTop: 1,
    fontFamily: 'Poppins-Regular',
  },
  divider: {backgroundColor: '#FFFFFF', marginTop: 25},
  chevron: {position: 'absolute', right: 20, top: 40},
});
const mapDispatchToProps = {
  // to stored
  setUserType,
};
export default connect(null, mapDispatchToProps)(DrawerContent);
