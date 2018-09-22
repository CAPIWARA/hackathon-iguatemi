import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Screen from '../components/Screen';

class LoginScreen extends Component {
  render () {
    return (
      <Screen>
        <View>
          <Text>Entrar no Aplicativo.</Text>
        </View>
      </Screen>
    )
  }
}

export default LoginScreen;
