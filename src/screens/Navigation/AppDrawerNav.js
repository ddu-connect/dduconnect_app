import React, {Component, PropType} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {Icon, Header} from 'native-base';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import 'react-native-gesture-handler';

import HomeScreen from '../Home/HomeScreen';
import FavouriteScreen from '../Favourite/FavouriteScreen';
import AcademicCalenderScreen from '../StaticScreens/AcademicCalenderScreen';
import SplashScreen from '../StaticScreens/SplashScreen';
import GalleryScreen from '../Gallery/GalleryScreen';
import AboutUsScreen from '../StaticScreens/AboutUsScreen';
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';
import ContactUsScreen from '../StaticScreens/ContactUsScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HomeStackNavigator from './HomeStackNavigator';
import MeetOurTeamNav from './MeetOurTeamNav';
import CopyrightsScreen from '../StaticScreens/CopyrightsScreen';
import AcademicCalenderNav from './AcadamicCalenderNav';
import PrivacyPolicy from '../StaticScreens/PrivacyPolicy';
import PlacementScreen from '../StaticScreens/PlacementScreen';
import event from '../Events/event';

const CustomDrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    {/* <Image style={{flex:1}}
                     source={require('../../assets/images/The_8th_Volume2.jpg')} /> */}
    <ImageBackground
      source={require('../../assets/images/bg-1.png')}
      style={{flex: 1, height: '100%'}}>
      <ImageBackground
        style={{flex: 1}}
        imageStyle={{bottom: 0}}
        source={require('../../assets/images/homepage_mobile-1.png')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'flex-end',
          }}>
          {/* <Text 
                      style={{fontFamily:'Montserrat-Bold',fontWeight:'900',fontSize:24}}>
                        The 8th Volume</Text> */}
          <TouchableOpacity style={{shadowOpacity: 0}}>
            <Button
              onPress={() => {
                // console.log("press");
                props.navigation.navigate('The9ThVolume');
              }}
              color="(0,0,0,0.0)"
              title="Know More"></Button>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ImageBackground>

    <View style={{flex: 2}}>
      <ScrollView style={{flex: 3}}>
        <DrawerItems {...props} />
      </ScrollView>
    </View>
  </SafeAreaView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/home.png')}
          />
        ),
      },
    },
    Events: {
      screen: event,
      navigationOptions: {
        drawerLabel: 'Events',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/event.png')}
          />
        ),
      },
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        drawerLabel: 'From The Editors Desk',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/edit.png')}
          />
        ),
      },
    },
    PlacementScreen: {
      screen: PlacementScreen,
      navigationOptions: {
        drawerLabel: 'Placement Screen',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/school.png')}
          />
        ),
      },
    },
    AcademicCalender: {
      screen: AcademicCalenderNav,
      navigationOptions: {
        drawerLabel: 'Academic Calender',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/today.png')}
          />
        ),
      },
    },
    AboutUs: {
      screen: AboutUsScreen,
      navigationOptions: {
        drawerLabel: 'About Us',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/badge.png')}
          />
        ),
      },
    },
    MeetOurTeam: {
      screen: MeetOurTeamNav,
      navigationOptions: {
        drawerLabel: 'Meet Our Team',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/people.png')}
          />
        ),
      },
    },
    ContactUs: {
      screen: ContactUsScreen,
      navigationOptions: {
        drawerLabel: 'Contact Us',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/send.png')}
          />
        ),
      },
    },
    Copyrights: {
      screen: CopyrightsScreen,
      navigationOptions: {
        drawerLabel: 'Copyrights',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/copyrights.jpeg')}
          />
        ),
      },
    },
    PrivacyPolicy: {
      screen: PrivacyPolicy,
      navigationOptions: {
        drawerLabel: 'Privacy Policy',
        drawerIcon: ({tintColor}) => (
          <Image
            style={{width: 25, height: 25}}
            source={require('../../assets/images/privacy.jpeg')}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerComponent,
  },
);

const AppDrawerNav = createAppContainer(MyDrawerNavigator);

export default AppDrawerNav;
