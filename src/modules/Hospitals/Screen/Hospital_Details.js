import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Paragraph, Checkbox, Title} from 'react-native-paper';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Header from '../Components/Header';

import Button from '../Components/Button';

// import Description from '../Components/Description';

const Hospital_Details = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Description'},
    {key: 'second', title: 'Review'},
  ]);

  const Description = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <ScrollView>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#A7AFBC',
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '700',
              }}>
              Gayatri Nagar Ward No 30, Motihari Ho Motihari-845401, Motihari,
              Bihar, india
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
            <Text
              style={{
                color: '#36596A',
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
                lineHeight: 24,
                fontWeight: '700',
              }}>
              Consultation Fee:{' '}
            </Text>
            <Text
              style={{
                color: '#4881DD',
                fontSize: 16,
                fontFamily: 'Poppins-Regular',
                lineHeight: 24,
                fontWeight: '700',
              }}>
              Rs.350.00
            </Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <Paragraph
              style={{
                textAlign: 'left',
                width: '90%',
                color: '#A7AFBC',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                lineHeight: 24,
                fontWeight: '400',
              }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </View>
          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
            <Button
              onPress={() => navigation.navigate('Product_Detail')}
              text="Book Appointemnt"
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  const Review = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <ScrollView>
          <View
            style={{
              height: 150,
              marginTop: 20,
              width: '90%',
              alignSelf: 'center',
              backgroundColor: '#EAF9F3',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#36596A',
                fontSize: 24,
                lineHeight: 28.13,
                fontFamily: 'Poppins-Regular',
              }}>
              4.5
            </Text>
            <Image source={require('../assets/Star.png')} />
            <Text
              style={{
                color: '#A7AFBC',
                fontSize: 14,
                lineHeight: 21,
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
                top: 5,
              }}>
              Overall 120 Review
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../assets/Image1.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: '#36596A',
                  fontSize: 16,
                  lineHeight: 24,
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '500',
                }}>
                Victoria Roach
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/Star.png')} />
                <Text
                  style={{
                    color: '#A7AFBC',
                    fontSize: 16,
                    lineHeight: 24,
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '500',
                  }}>
                  4.5 Rating
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#A7AFBC',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
                marginRight: 5,
              }}>
              2 hour ago
            </Text>
          </View>
          <View style={{marginLeft: 20, marginTop: 10, width: '90%'}}>
            <Text
              style={{
                color: '#A7AFBC',
                fontSize: 16,
                lineHeight: 24,
                fontFamily: 'Poppins-Regular',
                fontWeight: '500',
              }}>
              Lorem Ipsum has been the to be industry's standard dummy text
              evering.
            </Text>
          </View>
          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
            <Button
              onPress={() => navigation.navigate('Product_Detail')}
              text="Book Appointemnt"
            />
          </View>
        </ScrollView>
      </View>
    );
  };

  const renderScene = SceneMap({
    first: Description,
    second: Review,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#1479FF'}}
      style={{
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: 20,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: '#4881DD',
            margin: 8,
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '700',
            fontFamily: 'Poppins-Regular',
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header onPress={() => navigation.goBack()} Title="Hospital" />
      <View style={{marginTop: 75, marginLeft: 20}}>
        <Text style={styles.Heading}>PAM Hospital</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.description}>Dr Pushkar Sudhanshu</Text>
          <Paragraph style={styles.description}>
            PAM Hospital is one of best hospital in Motihari, Discount is
            available on all over bill 24 hr available, Contact us
            :-9431253590....
          </Paragraph>
        </View>
      </View>

      {/* <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({checked: !checked});
              }}
              color="#000000"
              uncheckedColor="#000000"
            /> */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    color: '#36596A',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    color: '#A7AFBC',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
});

export default Hospital_Details;

const ExploreWitHookExamples = () => {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{flex: 1}}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
};
