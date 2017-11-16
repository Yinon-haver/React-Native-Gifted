import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';


const SLIDE_DATA = [
    { text: 'Welcome to xxxx App', color: '#3498db' },
    { text: 'Use this to get a free gift', color: '#03A9F4' },
    { text: 'Set your location, then swipe away', color: '#47cca2' },
    { text: 'Last Slide', color: '#009688' },
    
  ];

class WelcomeScreen extends Component {
    // state = { token: null }
    
    //   async componentWillMount() {
    //     let token = await AsyncStorage.getItem('fb_token');
    
    //     if (token) {
    //       this.props.navigation.navigate('map');
    //       this.setState({ token });
    //     } else {
    //       this.setState({ token: false });
    //     }
    //   }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
      }
      
    render(){
        // if (_.isNull(this.state.token)) {
        //     return <AppLoading />;
        //   }
        return(
           <Slides 
           data ={SLIDE_DATA}
          onComplete={this.onSlidesComplete}
           />
            
        );
    }
}    

export default WelcomeScreen;