import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/AntDesign';

import {setUserType} from '../../store/action/auth/action';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const slides = [
  {
    key: 'one',
    title: 'Welcome',
    text: 'Dummy text used in laying out print, graphic or web designs. The passage is very good an unknown',
    image: require('../../assets/Slider/Mobile_1.png'),
  },
  {
    key: 'two',
    title: 'Search Doctors',
    text: 'Dummy text used in laying out print, graphic or web designs. The passage is very good an unknown',
    image: require('../../assets/Slider/Mobile_2.png'),
  },
  {
    key: 'three',
    title: 'Book Appointment',
    text: 'Dummy text used in laying out print, graphic or web designs. The passage is very good an unknown',
    image: require('../../assets/Slider/Mobile_3.png'),
  },
  {
    key: 'four',
    title: 'Doctor Consultation',
    text: 'Dummy text used in laying out print, graphic or web designs. The passage is very good an unknown',
    image: require('../../assets/Slider/Mobile_4.png'),
  },
];

class Boarding extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <View style={{marginTop: 75, marginBottom: 10}}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={{width: '75%'}}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="right" color="#FFFFFF" size={20} />
      </View>
    );
  };
  onDone = () => {
    this.props.setUserType(true);
    return (
      <View style={styles.buttonCircle}>
        <Icon name="right" color="#FFFFFF" size={20} />
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottom}></View>
        <AppIntroSlider
          showSkipButton={false}
          data={slides}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.key}
          renderDoneButton={() => this.onDone()}
          renderNextButton={this.renderNextButton}
          onDone={() => this.props.navigation.navigate('HomeScreen')}
          activeDotStyle={{backgroundColor: '#FF2B88'}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4881DD',
  },
  bottom: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#FFFFFF',
    height: windowHeight / 2.1,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
  },
  slide: {
    alignItems: 'center',
  },
  buttonCircle: {
    backgroundColor: '#FF2B88',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
    color: '#36596A',
  },
  text: {
    fontFamily: 'Poppins-Black',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#36596A',
    textAlign: 'center',
  },
});

const mapDispatchToProps = {
  // to stored
  setUserType,
};
export default connect(null, mapDispatchToProps)(Boarding);
