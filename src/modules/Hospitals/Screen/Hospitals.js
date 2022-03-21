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

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class Hospitals extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.header}>Hospitals</Text>
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

        <ScrollView>
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
            <TouchableOpacity>
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
    marginLeft: 20,
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
    color: '#36596A',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  Doctors_text: {
    fontSize: 14,
    lineHeight: 21,
    color: '#A7AFBC',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
});
