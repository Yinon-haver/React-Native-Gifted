import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { MapView } from 'expo';




class ReviewScreen extends Component {

    static navigationOptions = {
      title : 'Review',
      headerRight :
           <Button 
                    title="Settings"
                    onPress={this.onSettingsPress}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)" />
             
          }

          onSettingsPress= () => {
           this.props.navigate.navigate('settings');
          }

    render(){
        return(
            <View>
               <Text>ReviewScreen</Text>

            </View>
            
        );
    }
}    
export default ReviewScreen;