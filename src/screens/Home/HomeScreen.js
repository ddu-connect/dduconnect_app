import React, {Component, PropType} from 'react';
import {
  StatusBar,
  FlatList,
  ImageBackground,
  View,
  Modal,
  ActivityIndicator,
  TouchableHighlight,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  Header,
  Separator,
  Title,
  Card,
  Button,
  Text,
  Left,
  Right,
  Body,
  Container,
  Icon,
  Row,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Buzz from './Buzz';
import LatestArticle from './LatestArticle';
import TOTM from './TOTM';
import Category from '../../components/Category';
import OneSignal from 'react-native-onesignal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {white} from 'color-name';
import AboutUsScreen from '../StaticScreens/AboutUsScreen';
import MeetOurTeamScreen from '../MeetOurTeam/MeetOurTeamScreen';

import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator({
  AboutUs: {screen: AboutUsScreen},
  MeetOurTeam: {screen: MeetOurTeamScreen},
});
const image = {
  uri:
    'https://raw.githubusercontent.com/ddu-connect/dduconnect_database/master/notificationbg.jpeg',
};
export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => (
        <Text style={{fontFamily: 'Montserrat-Bold', fontWeight: '900'}}>
          {' '}
          DDU Connect{' '}
        </Text>
      ),
      headerLeft: () => (
        <Button
          transparent
          onPress={navigation.toggleDrawer}
          style={{margin: 15}}>
          <Image
            style={{width: 27, height: 27}}
            source={require('../../assets/images/menu.png')}
          />
        </Button>
      ),
    };
  };
  constructor(properties) {
    super(properties);
    this.state = {
      isLoading: true,
      posterVisible: false,
      buttonOpacity: 0.7,
      webpage_url: '',
      bg_url: '',
      btn_text: '',
      modalVisible: false,
      firstTime: true,
      link_for_vote:
        'https://docs.google.com/forms/d/e/1FAIpQLSdiNAAuB_EzclqTiq3qX5DvtW7GxZzdsqeJmTEiXYfc1GUU5Q/viewform',
    };

    OneSignal.init('a049d642-1cbe-4905-9167-2fd53771083a', {
      kOSSettingsKeyAutoPrompt: true,
    }); // set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);

    // this.timer = setInterval(()=> this.getMovies(), 10000)
  }
  componentDidMount() {
    // Start counting when the page is loaded

    // this.timer = setInterval(()=> this.getPosterStatus(), 5000)
    this.getPosterStatus();
    // AsyncStorage.getItem('firstTime').then(
    // 	value =>{
    // 		console.log(value);
    // 	  if(value == null){
    // 		this.timer = setInterval(()=> this.getMovies(), 5000)
    // 		AsyncStorage.setItem('firstTime',JSON.stringify(true)); // No need to wait for `setItem` to finish, although you might want to handle errors
    // 		   }
    // 		else if(value=="true"){
    // 			this.timer = setInterval(()=> this.getMovies(), 5000)
    // 			 this.setState({firstTime:true});
    // 		   }else{
    // 		//	AsyncStorage.setItem('firstTime',JSON.stringify(true)); // No need to wait for `setItem` to finish, although you might want to handle errors

    // 		   }

    // 	}
    //   )
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  hidePoster() {
    this.setState({posterVisible: false});
  }

  goforvote = x => {
    Alert.alert(
      'Star Of DDU',
      'Vote to your favourite contestant',
      [
        {
          text: 'Vote Now!',
          onPress: () => {
            this.setState({firstTime: false});
            // this.storeData();
            x.props.navigation.navigate('AlertWebView', {
              link: x.state.link_for_vote,
            });
          },
        },
      ],
      {cancelable: true},
    );
  };

  //   storeData = async () => {
  // 	try {
  // 	  await AsyncStorage.setItem('firstTime',JSON.stringify(false))
  // 	} catch (e) {
  // 	  // saving error
  // 	}
  //   }
  async getMovies() {
    if (this.state.firstTime == true) {
      console.log('get ');
      fetch(
        'https://raw.githubusercontent.com/Aatish13/DDUConnectDatabase/master/Notification.json',
        {method: 'GET'},
      )
        .then(response => response.json())
        .then(responseData => {
          //set your data here
          console.log(responseData);
          if (responseData.VotingStatus == true) {
            this.setState({
              modalVisible: true,
              link_for_vote: responseData.link,
            });
          } else {
            this.setState({modalVisible: false});
          }
          console.log(this.state.modalVisible);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  async getPosterStatus() {
    console.log('in poster status');

    fetch(
      'https://raw.githubusercontent.com/ddu-connect/dduconnect_database/master/Notification.json',
      {method: 'GET'},
    )
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({posterVisible: responseData.posterVisible});
        // this.setState({bg_url: responseData.bg_img})
        this.setState({webpage_url: responseData.webpage_url});
        this.setState({btn_text: responseData.btn_text});
        this.setState({buttonOpacity: responseData.buttonOpacity});
        // this.state.bg_url = { uri: this.state.bg_url };
        // console.log(this.state.bg_url);

        console.log(image);
      });
  }

  render() {
    // if(this.state.isLoading){
    // 	return(
    // 	  <View style={{flex: 1,justifyContent:'center',padding: 20}}>
    // 		<ActivityIndicator size='large'/>
    // 	  </View>
    // 	)
    // }
    return (
      <Container style={styles.container}>
        {/* <View style={{height:100,width:100,justifyContent:'center',alignItems:'center',position:"absolute",justifyContent:"center",alignItems:"center"}}>
			 { this.state.firstTime && this.state.modalVisible && this.goforvote(this)}
				</View> */}
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />

        <View>
          <Modal
            onRequestClose={() => this.hidePoster()}
            animationType="fade"
            transparent={true}
            visible={this.state.posterVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <View
                style={{
                  height: '60%',
                  width: '80%',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={image}
                  style={{
                    resizeMode: 'cover',
                    width: '100%',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Button
                    style={{
                      marginTop: '100%',
                      opacity: this.state.buttonOpacity,
                      height: '8%',
                      backgroundColor: 'black',
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.hidePoster();
                      this.props.navigation.navigate('AlertWebView', {
                        link: this.state.webpage_url,
                      });
                    }}>
                    <Text style={{color: 'white', opacity: 1, fontSize: 15}}>
                      {this.state.btn_text}
                    </Text>
                  </Button>
                </ImageBackground>

                <Button
                  style={{
                    margin: 5,
                    height: '7%',
                    opacity: 0.7,
                    backgroundColor: 'black',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.hidePoster();
                  }}
                  title="Close">
                  <Text style={{color: 'white', fontSize: 15}}>Close</Text>
                </Button>
              </View>
            </View>
          </Modal>
        </View>

        <ScrollView>
          <View style={{margin: 5}}></View>
          <Category navigation={this.props.navigation} />

          <Text
            style={{
              fontSize: 20,
              paddingLeft: 10,
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
            }}>
            Latest Articles
          </Text>
          <LatestArticle navigation={this.props.navigation} />
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 10,
              fontFamily: 'Montserrat-Light',
              fontWeight: 'bold',
            }}>
            Theme Of The Month
          </Text>
          <TOTM navigation={this.props.navigation} />
          {/* <TouchableOpacity 
				onPress={()=>{
                              this.props.navigation.navigate('AlertWebView',{link:this.state.link_for_vote})
                              }
				}
				  style={{flex:1,justifyContent:'center',alignItems:'center',borderColor:'#222',borderWidth:1}}>
				 <Text  >Vote For Star Of DDU</Text>
				  </TouchableOpacity> */}
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 10,
              fontFamily: 'Montserrat-Bold',
              fontWeight: 'bold',
            }}>
            Buzz
          </Text>
          <Buzz navigation={this.props.navigation} />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
  },
});
