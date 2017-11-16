import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
  } from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
  
    if (token) {
      // Dispatch an action saying FB login is done
      dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
      // Start up FB Login process
      doFacebookLogin(dispatch);
    }
  };

  const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('523513211346234', {
      permissions: ['public_profile', 'email', 'user_location', 'user_birthday']
    });
  
    if (type === 'cancel') {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
    else if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response2 = await fetch(`https://graph.facebook.com/me?fields=id,name,picture&access_token=${token}`);
 
         //console.log(response);
         console.log(response2);
         //console.log(response3);
         
         
         //console.log(`Hi ${(await response.json()).name}!`);
    
      }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  };

