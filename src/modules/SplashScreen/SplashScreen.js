import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {Component} from 'react';

export default class SplashScreen extends Component {
  componentDidMount = async () => {
    setTimeout(() => {
      this.props.navigation.navigate('Boarding');
    }, 3000);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/Frame.png')}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/Group.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4881DD',
  },
  logo: {
    position: 'absolute',
  },
});
