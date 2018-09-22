import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Screen from '../components/Screen';
import Authentication from '../domains/Authentication/services';

class LoginScreen extends Component {

  onLogin = async () => {
    await Authentication.authenticate();
    this.props.navigation.navigate('User');
  };

  render () {
    return (
      <Screen>
        <View>
          <Text>Entrar no App.</Text>
          <Button title="Entrar" onPress={ this.onLogin } />
        </View>
      </Screen>
    )
  }
}

export default LoginScreen;
