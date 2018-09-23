import React, { Component } from 'react';
import {
  Button,
  View,
  Linking,
} from 'react-native';
import Scanner from '@/components/Scanner/Scanner';
import Notification from '@/domains/Notification/services';
import Authentication from '@/domains/Authentication/services';

class ScannerScreen extends Component {
  onRead = async (e) => {
    try {
      await Linking.openURL(e.data);
    } catch (error) {
      Notification.showMessage('Erro ao abrir o Link.')
    }
  };

  onLogout = async () => {
    await Authentication.unauthenticate();
    this.props.navigation.navigate('Guest');
  };

  render() {
    return (
      <View>
        <Scanner
          onRead={ this.onRead }
        />
        <Button title="Sair" onPress={ this.onLogout } />
      </View>
    );
  }
}

export default ScannerScreen;
