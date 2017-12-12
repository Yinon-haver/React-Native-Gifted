import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { MapView } from 'expo';


class MapScreen extends Component {
    state = {
        mapLoaded: false,
        region: {
          longitude: 34.97474417492424,
          latitude: 32.764653112747,
          longitudeDelta: 0.0005029142363923711,
          latitudeDelta: 0.000810841991523148
        }
      }

      
      componentDidMount() {
        this.setState({ mapLoaded: true });
      }
    
      onRegionChangeComplete = (region) => {
        this.setState({ region });
        console.log(region);
      }
      
      render() {
        return (
            <MapView
                region={this.state.region}
                style={{ flex: 1 }}
                onRegionChangeComplete={this.onRegionChangeComplete}
        />
        );
      }
    }   
export default MapScreen;