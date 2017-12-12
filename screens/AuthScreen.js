import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking,AsyncStorage ,TouchableOpacity,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import * as actions from '../actions';
import { Button,SocialIcon,Header } from 'react-native-elements';
import LoginForm from '../src/LoginForm'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HIGHT = Dimensions.get('window').height;

class AuthScreen extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCVFgxcMZ7WZg1F7laJUelYLEPTGhsN-nE",
            authDomain: "gifted-fc0e4.firebaseapp.com",
            databaseURL: "https://gifted-fc0e4.firebaseio.com",
            projectId: "gifted-fc0e4",
            storageBucket: "",
            messagingSenderId: "583291871081"
        };
        firebase.initializeApp(config);
    }

   componentDidMount() {
    
        //clera the saved token  need to delet this after 
       // AsyncStorage.removeItem('fb_token');
        this.onAuthComplete(this.props);
        
     }

     componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
      }

     onAuthComplete(props) {
        if (props.token || props.userLogInWithEmail)  {
          this.props.navigation.navigate('map');
        }
      }

     logInWithfacebook= () => { 
         this.props.facebookLogin();
     }

    render(){
        console.log(this.props)
        return(
            <View style={styles.loginForm}>
                <LoginForm style={styles.loginForm}/>
                 <TouchableOpacity onPress={this.logInWithfacebook} style={styles.buttonStyle}>
                    <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />
               </TouchableOpacity>
            </View>
            
        );
    }
}  
const styles = {

    buttonStyle: {
        width: SCREEN_WIDTH,
         marginTop: 100
    },
    loginForm:{
        marginTop:50
    }
  
  };

const  mapStateToProps= state => {
    return {
         token: state.auth.token ,
         userLogInWithEmail: state.authWithEmail.user,
         loading:state.auth.loading
        };
  }

export default connect(mapStateToProps, actions)(AuthScreen);
