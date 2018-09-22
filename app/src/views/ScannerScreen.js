import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Screen from '../components/Screen';

class ScannerScreen extends Component {
  render () {
    return (
      <Screen>
        <View>
          <Text>Scanear produtos.</Text>
        </View>
      </Screen>
    )
  }
}

export default ScannerScreen;
