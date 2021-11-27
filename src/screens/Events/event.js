import React, {Component, PropType} from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LiveEvents from './Live-Events.js';
import UpcomingEvents from './Upcoming-Events';
import {Header} from 'react-native-elements';
import {
  Title,
  Card,
  Text,
  Left,
  Right,
  Button,
  Body,
  Container,
  Icon,
  Row,
} from 'native-base';

const Tab = createMaterialTopTabNavigator();

export default class event extends Component {
  static navigationOptions = {
    drawerLabel: 'event',
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Header backgroundColor="#fff">
            <Button transparent onPress={this.props.navigation.toggleDrawer}>
              <Image
                style={{width: 27, height: 27}}
                source={require('../../assets/images/menu.png')}
              />
            </Button>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontWeight: '900',
                marginTop: '5%',
              }}>
              {' '}
              Events{' '}
            </Text>
          </Header>
          <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />

          <Tab.Navigator>
            <Tab.Screen name="Live Events" component={LiveEvents} />
            <Tab.Screen name="Upcoming Events" component={UpcomingEvents} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0s
  },
});
