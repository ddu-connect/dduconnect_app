import React,{ Component ,PropType } from 'react';
import {FlatList,ImageBackground,View,ScrollView,Image,StyleSheet,StatusBar, Dimensions,ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview';
import {Title,Card,Text,Left,Right,Button,Body,Container,Icon, Row} from 'native-base';
import {Header} from 'react-native-elements'
import YouTube from 'react-native-youtube'

export default class AboutUsScreen extends Component{
  
  static navigationOptions = {
		title: "AboutUs"
	}
    constructor(props) {
        super(props);
        this.state = { visible: true, video_link:"" };
    }
    
    componentDidMount(){
      this.getVideo();
    }
    hideSpinner() {
        this.setState({ visible: false });
    }
    async getVideo(){
      console.log("in get video");
      
      fetch('https://raw.githubusercontent.com/ddu-connect/dduconnect_database/master/Notification.json', {method: "GET"})
      .then((response) => response.json())
    .then((responseData) =>
     {
       console.log(responseData)
       this.setState({video_link: responseData.about_us_video_link})
       console.log(this.state.video_link);	

       
     })	
    }
	render(){
        
        const params = "https://dduconnect.in/about-us";
       // console.log(params);
    return(
    
        <View style={{ flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
        <Header backgroundColor='#fff'>
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
          <Image
						style={{width: 27, height:27 }}
						source={require('../../assets/images/menu.png')}
						/>
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900',marginTop:'5%'}}> About Us </Text>
          </Header>  
          <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
          <WebView
            style={{ alignSelf: 'stretch', margin:15 }}
            source={{uri: this.state.video_link}}
          />
          {/*
            'https://www.youtube.com/embed/U7tmi02ctgY?rel=0&autoplay=1&showinfo=0&loop=1' 
            <YouTube
            apiKey="AIzaSyCGu4PWX1orSkGgQwBGHbM5TNiEaDm61Ic"
            videoId="U7tmi02ctgY"
            play={true}
            fullscreen={false}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300, marginHorizontal:30 }}
          /> */}
            <ScrollView style={{flex:1,padding:40}}>
              <Text style={{alignItems:"center",textAlign:"center",marginBottom:35, letterSpacing:1, lineHeight:20, paddingBottom:20}}>
              DDU Connect started on 17th March, 2012 with an aim to 'Connect all faculties of Dharmsinh Desai University and to provide a platform for all students to showcase their creativity. The journey began with a 16 page tabloid by the tagline "For the students, By the students". DDU Connect covers all the latest events happening around the university. It also interviews various eminent personas across the country and alumni of the university. DDU Connect has grown exponentially since its launch. It held a Photography exhibition and played an active part in the University Foundation Day event, which witnessed a Guinness record being established. Evolving from a 20 page tabloid in to a 'GoGreen' concept, Connect celebrates one year into the official digital platform of the university. With all due support, it has leapt into another year of excitement, challenges and venture with the vision to synergize individuality.
              
              </Text>
            </ScrollView>

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
    ActivityIndicatorStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
    },
  });