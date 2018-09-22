import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Screen from '../components/Screen';

class LoaderScreen extends Component {
  render () {
    return (
      <Screen>
        <View>
          <Text>Carregando...</Text>
        </View>
      </Screen>
    )
  }
}

export default LoaderScreen;
