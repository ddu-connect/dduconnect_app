import React  , { Component ,PropType } from 'react';
import { View ,StyleSheet,Dimensions, Image,StatusBar} from 'react-native';
import Pdf from 'react-native-pdf';
import { Button, Icon,Text } from 'native-base';
import { Header } from 'react-native-elements';

export default class PlacementScreen extends Component{

	render(){
	
		var source = ''
		
			source = {uri:'https://ddu-connect.github.io/dduconnect_database/placement.pdf',cache:false};
	

		return (
			<View style={styles.container}>
	
				 { <Header backgroundColor='#fff' >
          <Button transparent onPress={this.props.navigation.toggleDrawer}>
		  			<Image
						style={{width: 27, height:27 }}
						source={require('../../assets/images/menu.png')}
						/>
          </Button>
          <Text style={{fontFamily:'Montserrat-Bold',fontWeight:'900',marginTop:'5%'}}> Placement Mania </Text>
          </Header>   }
		  <StatusBar translucent backgroundColor="rgba(0,0,0,0.5)" />
			<Pdf
				source={source}
				onLoadComplete={(numberOfPages,filePath)=>{
					// console.log(`number of pages: ${numberOfPages}`);
				}}
				onPageChanged={(page,numberOfPages)=>{
					// console.log(`current page: ${page}`);
				}}
				onError={(error)=>{
					console.log(error);
				}}
				onPressLink={(uri)=>{
					console.log(`Link presse: ${uri}`)
				}}
				style={styles.pdf}/>
		</View>
		);
		
	}

}

const styles = StyleSheet.create({
    container: {
		flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
