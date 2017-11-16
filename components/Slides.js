import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

    renderSlides() {
        return this.props.data.map((slide, index) => {
          return (
            <View
              key={slide.text}
              style={[styles.slideStyle, { backgroundColor: slide.color }]}
            >
              <Text style={styles.textStyle}>{slide.text}</Text>
              {this.renderLastSlide(index)}
            </View>
          );
        });
      }

      //if this is the last slide we add a button to the page
      renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
          return (
            <Button
              title="Onwards!"
              raised
              buttonStyle={styles.buttonStyle}
              onPress={this.props.onComplete}
              />
          );
        }
      }


    render (){
        return (
         //horizontal list    
        <ScrollView
            horizontal
            style={{ flex: 1 }}
            pagingEnabled
        >
            {this.renderSlides()}
      </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: SCREEN_WIDTH,
    
    },
    textStyle: {
      fontSize: 30,
      color: 'white'
    },
    buttonStyle: {
      backgroundColor: '#0288D1',
      marginTop: 15
    }
  };

export default Slides;
