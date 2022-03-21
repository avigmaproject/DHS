import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

export default class Book_Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appointment_Date: null,
      isDatePickerVisible: false,
    };
  }

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleConfirm = date => {
    this.setState({
      Appointment_Date: date,
    });
    this.hideDatePicker();
  };
  render() {
    const {navigation} = this.props;
    const {isDatePickerVisible, Appointment_Date} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Header Title="Book Appointment" onPress={() => navigation.goBack()} />
        <View style={{marginTop: 25}}>
          <TextInput label="Full Name*" />
        </View>
        <View style={{marginTop: 20}}>
          <TextInput label="Email Address" />
        </View>
        <View style={{marginTop: 20}}>
          <TextInput label="Phone Number*" />
        </View>
        <View style={{marginTop: 20}}>
          <TextInput label="Fix Appointment Date*" value={Appointment_Date} />
          <TouchableOpacity
            style={styles.calendar}
            onPress={() => this.showDatePicker()}>
            <AntDesign name="calendar" color="#36596A" size={26} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 50}}>
          <Button
            text="Book Now"
            onPress={() => navigation.navigate('Payment_Method')}
          />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={date => this.handleConfirm(date)}
          onCancel={() => this.hideDatePicker()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {position: 'absolute', zIndex: 1, right: 30, bottom: 20},
});
