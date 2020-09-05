import React  , { Component ,PropType } from 'react';
import { View ,Text ,TouchableOpacity,Picker,StyleSheet, TouchableHighlight, RefreshControl, ScrollView} from 'react-native';
import { Body,Icon,Button } from 'native-base';
import {Header} from 'react-native-elements'
import NetInfo from "@react-native-community/netinfo";

export default class AcademicCalenderScreen extends Component{

  constructor(properties) {
		super(properties);
		this.state ={ refreshing: false, isConnected: true}
		
		this.timer = setInterval(()=> this.getConnectionStatus(), 1000)
	  }
	
	  getConnectionStatus(){
		NetInfo.fetch().then(state => {
			if ( this.state.isConnected != state.isConnected )
			{
				this.setState({isConnected : state.isConnected})
			// this.state.isConnected = state.isConnected;
				// console.log(this.state.isConnected);
			}
		});
	  }
  onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({refreshing: false });
};
	
  render() {
    return (
      
        
            
      <Body style={{marginTop:-20,padding:0}}>
          <Header backgroundColor='fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
            <Icon name='menu' />
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900'}}> Academic Calender </Text>
          </Header>     
          
        
        
          <ScrollView style={styles.scrollView}

            contentContainerStyle={{ flex: 1 }}
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.onRefresh}
                    />
            }
            >
              <TouchableHighlight>
              <View style={{backgroundColor:"red"}}>
                { 
                  this.state.isConnected ? null : <Text style={{alignSelf: "center", color: "white", fontSize:15}}>
                    No Internet Connection
                  </Text>
                }
              </View>
            </TouchableHighlight>

        <View style={{flex:1,paddingHorizontal:10}}>
        
      

        <View style={styles.separator} />
        <Button transparent onPress={() => { this.props.navigation.navigate('AcademicCalender',{d:1});}}>
        <Text style={styles.ButtonLayout} >SEM 1, 2</Text>
      </Button>
     
      <View style={styles.separator} />
      <Button transparent onPress={() => {this.props.navigation.navigate('AcademicCalender',{d:2})}}>
        <Text  style={styles.ButtonLayout} >SEM 4, 6, 8 </Text>
      </Button>
        
          
      <View style={styles.separator} />
          

     </View>
      </ScrollView>
          
        
      </Body>
     
    );
  }
}



const styles = StyleSheet.create({
  ButtonLayout: { fontSize: 15, color: '#000000', backgroundColor: "#ffffff", padding: 8,width:'100%',fontWeight:"bold",marginVertical:8}
  ,
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    marginTop: 2,
    marginHorizontal: 16,
  },
  iconstyle: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  titlestyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.0)',
    padding: 7,
    borderRadius: 10,
  },
  separator: {
    marginVertical: 0.2,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});