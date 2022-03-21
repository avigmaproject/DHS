import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{marginLeft: 10, marginTop: 10}}>
            <Entypo name="menu" size={35} color="#36596A" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.header}>Hi, Monroe Bond</Text>
          </View>
          <TouchableOpacity style={{marginRight: 10, marginTop: 10}}>
            <Image
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg',
              }}
              style={styles.circle}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search doctor & hospital"
          />
          <Ionicons
            name="search-outline"
            size={30}
            color="#ABAEBE"
            style={styles.search}
          />
        </View>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image
              source={require('../assets/Covid.png')}
              style={styles.logo}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Find Specialities</Text>
            <TouchableOpacity style={styles.view}>
              <Text style={styles.viewtext}>View all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/Neurologist.png')} />
                </View>
                <Text style={styles.Specialities_text}>Neurologist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/hematology.png')} />
                </View>
                <Text style={styles.Specialities_text}>Hematology</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Cardiologist_circle}>
                  <Image source={require('../assets/Cardiologist.png')} />
                </View>
                <Text style={styles.Specialities_text}>Cardiologist</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>Top Hospitals</Text>
            <TouchableOpacity style={styles.view}>
              <Text style={styles.viewtext}>View all</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Hospital_Details')}>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/1.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>PAM Hospital</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Hospital_Details')}>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/2.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>Ujjal Seva Sadan</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/3.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>YouHeal Hospital</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/4.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>My Health Medical</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/5.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>Cedars-Sinai</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Hospitals}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Image
                    source={require('../assets/6.png')}
                    style={styles.hosp_image}
                  />
                  <View>
                    <Image
                      source={require('../assets/Tag.png')}
                      style={styles.Tag}
                    />
                    <Text style={styles.Tag_Text}>30% OFF</Text>
                  </View>
                </View>
                <View style={{marginLeft: 10, marginTop: 20}}>
                  <Text style={styles.Hospitals_text}>Global Health</Text>
                  <Text style={styles.Doctors_text}>40 Doctors</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },
  header: {
    color: '#36596A',
    fontSize: 22,
    fontWeight: '700',
    fontFamily: 'Poppins-Regular',
    lineHeight: 33,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#4881DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  input: {
    height: 45,
    margin: 12,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
  },
  search: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  logo: {
    width: '90%',
  },
  title: {
    color: '#36596A',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    lineHeight: 30,
  },
  view: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  viewtext: {
    color: '#A7AFBC',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Poppins-Regular',
  },
  Specialities: {
    backgroundColor: '#FFFFFF',
    height: 140,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Specialities_circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#FCF2F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cardiologist_circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Specialities_text: {
    color: '#36596A',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 19.5,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    top: 5,
  },
  Hospitals: {
    backgroundColor: '#FFFFFF',
    height: 150,
    width: deviceWidth / 2.35,
    borderRadius: 10,
  },
  hosp_image: {
    marginTop: 10,
    marginLeft: 10,
  },
  Tag: {
    marginTop: 10,
    marginRight: 2,
  },
  Tag_Text: {
    position: 'absolute',
    fontSize: 8,
    lineHeight: 8,
    fontFamily: 'Poppins-Regular',
    color: '#FF2B88',
    bottom: 35,
    left: 10,
  },
  Hospitals_text: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
    color: '#36596A',
    fontWeight: '600',
  },
  Doctors_text: {
    fontSize: 14,
    lineHeight: 21,
    color: '#A7AFBC',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
