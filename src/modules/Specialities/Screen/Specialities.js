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

export default class Specialities extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.header}>Specialities</Text>
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/Physician.png')} />
                </View>
                <Text style={styles.Specialities_text}>Physician</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/Hepatologist.png')} />
                </View>
                <Text style={styles.Specialities_text}>Hepatologist</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/Neurologist.png')} />
                </View>
                <Text style={styles.Specialities_text}>Neurologist</Text>
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
            <TouchableOpacity>
              <View style={styles.Specialities}>
                <View style={styles.Specialities_circle}>
                  <Image source={require('../assets/Physician.png')} />
                </View>
                <Text style={styles.Specialities_text}>Physician</Text>
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
    fontFamily: 'Poppins-Regular',
    lineHeight: 19.5,
    textAlign: 'center',
    top: 5,
  },
});
