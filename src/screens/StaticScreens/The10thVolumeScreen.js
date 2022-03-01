import React, {Component, PropType} from 'react';
import {
  StatusBar,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';

export default class The10thVolumeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'The10ThVolume',
  };

  render() {
    return (
      <View>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{marginTop: 20, marginLeft: 20}}>
          <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
            <Image
              style={{width: 27, height: 27, marginTop: 10}}
              source={require('../../assets/images/menu_white.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/homepage_mobile-2.jpeg')}
          style={{
            zIndex: -1,
            width: '100%',
            height: '100%',
            marginTop: -57,
            justifyContent: 'center',
            resizeMode: 'center',
            backgroundColor: '#031022',
          }}
        />
        {/* <ImageBackground
          style={{
            zIndex: -1,
            width: '100%',
            height: '100%',
            marginTop: -57,
            justifyContent: 'center',
          }}
          imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch'}}
          source={require('../../assets/images/homepage_mobile-2.jpeg')}></ImageBackground> */}
      </View>
    );
  }
}
