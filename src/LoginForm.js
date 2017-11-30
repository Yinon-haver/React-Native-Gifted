import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged ,passwordChanged,loginUser } from '../actions/loginform_action';
import { Card, CardSection, Input, Button, Spinner,Header } from './components/common';
import { SocialIcon,Icon } from 'react-native-elements';


class LoginForm extends React.Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
    
  }

  onButtonPress(){
    const { email, password } = this.props;
    //caling the loginn action
    this.props.loginUser({ email, password });
    
  }
 
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
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

  
        {<Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>}

        <CardSection style={styles.LoginForm}>
          {this.renderButton()}
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
      },
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
      
    };


    const mapStateToProps = state => {
      // const { email, password, error, loading } = auth;
           
      return { 
        email: state.authWithEmail.email,
        password: state.authWithEmail.password,
        error:  state.authWithEmail.error,
        loading: state.authWithEmail.loading
      };
    };
    //bind the action to the camponent
    export default connect(mapStateToProps, {   emailChanged , passwordChanged ,loginUser })(LoginForm);