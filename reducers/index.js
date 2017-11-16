import { combineReducers } from 'redux';
import auth from './auth_reducer';
import AuthReducer from './AuthReducer';


export default combineReducers({
    auth ,
    authWithEmail: AuthReducer,
    
});