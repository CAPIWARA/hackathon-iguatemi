import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import Screen from '../components/Screen';
import { RNCamera as Camera } from 'react-native-camera';
import Authentication from '../domains/Authentication/services';

class ScannerScreen extends Component {
  onLogout = async () => {
    await Authentication.unauthenticate();
    this.props.navigation.navigate('Guest');
  };

  setCamera = (camera) => {
    if (this.camera === camera)
      return;
    this.camera = camera;
  };

  render () {
    return (
      <Screen>
        <View>
          <Camera
            ref={ this.setCamera }
            type={ Camera.Constants.Type.back }
            flashMode={ Camera.Constants.FlashMode.off }
            permissionDialogTitle={ 'Permissões' }
            permissionDialogMessage={ 'Você precisa habilitar o uso da camera.' }
          />
          <Text>Escanear produtos.</Text>
          <Button title="Sair" onPress={ this.onLogout } />
        </View>
      </Screen>
    )
  }
}

export default ScannerScreen;
