import React, {Component, PropType} from 'react';
import {
  FlatList,
  ImageBackground,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Header,
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

export default class PostScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <Text> {navigation.state.text} </Text>,
    };
  };
  constructor(props) {
    super(props);
    this.state = {visible: true};
  }
  showSpinner() {
    this.setState({visible: true});
  }
  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    const {params} = this.props.navigation.state;
    // console.log(params);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'stretch',
          marginTop: -62,
        }}>
        <Spinner visible={this.state.visible} color="#159897" />
        <WebView
          source={{uri: params.link}}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
          javaScriptEnabled={true}
          onShouldStartLoadWithRequest={request => {
            console.log(request);
            return false;
          }}
          pagingEnabled
          scalesPageToFit={true}
          stycontainerStyle={{flex: 1, alignItems: 'stretch'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stylOld: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleNew: {
    flex: 1,
  },
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
});
