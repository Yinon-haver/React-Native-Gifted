import React from 'react';
import { StyleSheet, Text, View ,ScrollView , Dimensions,} from 'react-native';
import { Icon, Card ,Button,CheckBox } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

class Deck extends React.Component{
// map over all the Data that recived and creat a card for all iteam
    renderCard(){
        return this.props.data.map(item => {
            return (
                <Card
                key={item.id}
                title={item.text}
                titleStyle={styles.titleStyle}
                image={{ uri: item.uri }}
                >
                <Text style={{ marginBottom: 10 }}>
                This is a some description about the gift , on click you will save the current gift and when you will  navigate to the saved gifts page you can watch any gift that you save
                </Text>
                <Button
                  icon={{ name: 'card-giftcard' }}
                  backgroundColor="#03A9F4"
                  title="Take It Free !"
                  onPress={console.log("BAtek")}
                />
                <CheckBox
                    center
                    title='Click Here to Add This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={false}
                    />
              </Card>
            )
            ;
        })
    }

    render(){
        return(
            <ScrollView>
                {this.renderCard()}
            </ScrollView>
        );
        
    }
}
const styles = {
    titleStyle: {
      color : '#03A9F4'
    }
  }; 

export default Deck;