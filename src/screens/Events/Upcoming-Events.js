import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  ImagePropTypes,
} from 'react-native';
import Card from './Card';
import moment from 'moment';

export default function UpcomingEvents() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ddu-connect/dduconnect_database/master/Events.json',
    )
      .then(response => response.json())
      .then(responseJson => {
        let arr = responseJson;
        let newArray = responseJson.filter(function (item) {
          return moment().isBefore(
            moment(item['Start-date'], 'DD-MM-YYYY'),
            'day',
          );
        });
        setData(newArray);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  function fallback() {
    if (data.length === 0) {
      return (
        <ImageBackground
          source={require('../../assets/images/no-results.png')}
          style={styles.imageBackground}
        />
      );
    } else {
      return (
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalText}>
                  <Text style={styles.title}>{modalData.title}</Text>
                  <Text style={{textAlign: 'justify'}}>
                    {modalData.description}
                  </Text>
                  <Text style={{marginTop: 8}}>
                    Ends on {modalData['End-date']}
                  </Text>
                </View>
                <TouchableHighlight
                  style={styles.buttonView}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.buttonTextStyle}>Hide</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <FlatList
            style={{width: '100%'}}
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  setModalData(item);
                  setModalVisible(true);
                }}>
                <Card>
                  <View>
                    <Image
                      source={{uri: item.icon}}
                      resizeMode="contain"
                      style={styles.logo}
                    />
                  </View>
                  <View style={styles.content}>
                    <View>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={[styles.title, {marginLeft: 8}]}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginLeft: 9}}>
                      <Image
                        source={require('../../assets/images/clock.png')}
                        style={styles.icon}
                      />
                      <Text style={{marginLeft: 5}}>{item['Start-date']}</Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={{marginLeft: 8, marginTop: 4}}
                        activeOpacity={0.5}
                        onPress={() => {
                          setModalData(item);
                          setModalVisible(true);
                        }}>
                        <View
                          style={{flexDirection: 'row', paddingVertical: 3}}>
                          <Image
                            source={require('../../assets/images/info.png')}
                            style={styles.icon}
                          />
                          <Text style={{marginLeft: 6}}>Know More</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : fallback()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonView: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingRight: 10,
    marginHorizontal: 15,
    width: '55%',
  },
  logo: {
    width: 120,
    height: 120,
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: '#1261A0',
    width: '100%',
    marginBottom: 10,
  },
  imageBackground: {
    width: 400,
    height: 400,
  },
});
