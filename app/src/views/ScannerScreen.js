import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Screen from '../components/Screen';
import Authentication from '../domains/Notification/services';

class ScannerScreen extends Component {
  onLogout = async () => {
    await Authentication.unauthenticate();
    this.props.navigation.navigate('Guest');
  }

  render () {
    return (
      <Screen>
        <View>
          <Text>Escanear produtos.</Text>
          <Button title="Sair" onPress={ this.onLogout } />
        </View>
      </Screen>
    )
  }
}

export default ScannerScreen;
