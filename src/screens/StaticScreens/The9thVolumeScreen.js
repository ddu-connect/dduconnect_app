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

export default class The9thVolumeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'The9thVolume',
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
        <ImageBackground
          style={{
            zIndex: -1,
            width: '100%',
            height: '100%',
            marginTop: -60,
            justifyContent: 'center',
          }}
          imageStyle={{width: '100%', resizeMode: 'cover'}}
          source={require('../../assets/images/homepage_mobile.png')}></ImageBackground>
      </View>
    );
  }
}
