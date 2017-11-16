import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged ,passwordChanged} from '../actions/loginform_action';
import { Card, CardSection, Input, Button, Spinner,Header } from './components/common';
import { SocialIcon,Icon } from 'react-native-elements';


class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
    console.log( this.props.emailChanged(text));
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }


  render(){
    return(
      <Card style={ styles.card}>
        <CardSection>
           <Header headerText={'Login Header' } />
        </CardSection>
        <CardSection style={styles.LoginForm}>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            //caling the action 
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection style={styles.LoginForm}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
        </CardSection >

        {/* <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text> */}

        <CardSection style={styles.LoginForm}>
          <Button>
            Login
            </Button>
        </CardSection>
      </Card>
    );
  }

}  
const styles = {
  
      LoginForm:{
          marginTop:10
  
      },
      card:{
        marginTop:100
      }
    };


    const mapStateToProps = state => {
      // const { email, password, error, loading } = auth;
    
      return { 
        email: state.authWithEmail.email,
        password: state.authWithEmail.password
      };
    };
    //bind the action to the camponent
    export default connect(mapStateToProps, {   emailChanged , passwordChanged })(LoginForm);