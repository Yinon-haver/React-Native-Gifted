import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    LOGIN_FB_USER
  } from '../actions/types';
  
  export default function(state = {loading: false}, action) {
    switch (action.type) {
      case LOGIN_FB_USER:
        return {loading :true}
      case FACEBOOK_LOGIN_SUCCESS:
        return { token: action.payload };
      case FACEBOOK_LOGIN_FAIL:
        return { token: null };
      default:
        return state;
    }
  }