import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Screen from '../components/Screen';
import Authentication from '../domains/Authentication/services';
import Entry from '../components/Entry';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  onLogin = async () => {
    await Authentication.authenticate();
    this.props.navigation.navigate('User');
  };

  render () {
    return (
      <Screen>
        <View>
          <Entry 
            name="Endereço de E-Mail"
            value={ this.state.email }
            onChange={ (email) => this.setState({ email }) }
            keyboardType="email-address"
          />

          <Entry 
            name="Senha"
            value={ this.state.password }
            onChange={ (password) => this.setState({ password }) }
            secureTextEntry
          />

          <Button title="Entrar" onPress={ this.onLogin } />
        </View>
      </Screen>
    )
  }
}

export default LoginScreen;
