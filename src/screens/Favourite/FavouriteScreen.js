import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

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

export default class FavouriteScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Favourite',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#3D4051',
        }}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{marginTop: 20, marginLeft: 20}}>
          <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
            <Image
              style={{width: 30, height: 30, marginTop: 10}}
              source={require('../../assets/images/menu_white.png')}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.con}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>
              <Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                {' '}
                {'\n'}
                From The {'\n'} {'\t'} {'\t'}
                {'\t'}
                <Text
                  style={{fontWeight: 'bold', color: '#db5b5c', fontSize: 30}}>
                  {' '}
                  Editor's{' '}
                </Text>
                Desk{' '}
              </Text>
              {'\n'}
              {'\n'}
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                {' '}
                It’s all about taking the first step.
              </Text>
              {'\n'}
              {'\n'}
              “Kintsugi or Kintsukuroi (“golden joinery”) is the centuries-old
              Japanese art of putting broken pottery pieces back together with
              golden adhesive that enhances the break lines, thus making the
              piece unique.” Having scars or being broken isn’t shameful. When
              we embrace the beauty of improving imperfections, we create an
              even stronger, resilient, and the most stunning version of
              ourselves. Acceptance and Improvisation is the art everyone must
              master. Life is going to be tough and you might fall, but the
              beauty is in standing up and never giving up. Comfort zones are
              simply our unchartered waters where our unrealized dreams are
              buried. Success begins when we step out of this zone. We must
              always trust our process, even if sometimes along the way things
              seem to be uncertain or nearly impossible.
              {'\n'}
              {'\n'}
              By understanding, and embracing our fellow students' interests we
              aim to build stronger and lasting impressions that will multiply
              in terms of readers and contributors. Our writers are ready to
              take you on a new expedition through the Open Letter, Fiction,
              ‘Tech’ It Easy, Connections, and Writer’s Lounge. Get to know the
              various events taking place in the university through the DDU
              Buzz. Also for the creative minds of our university, we are soon
              bringing back our art-related page named ‘Artistic Visions’.
              {'\n'}
              {'\n'}
              We, as always, await your stories of adventures and experiences at
              dduconnect@gmail.com.
              {'\n'}
              {'\n'}
              Muskan Vora{'\n'}
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Editor-in-Chief
              </Text>
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginBottom: 50,
  },
});
