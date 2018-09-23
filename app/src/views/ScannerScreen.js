import React, { Component } from 'react';
import {
  Button,
  View,
  Linking,
  StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Notification from '@/domains/Notification/services';
import Authentication from '@/domains/Authentication/services';
import Screen from '@/components/Screen';

class ScannerScreen extends Component {
  reference = undefined;

  state = {
    type: RNCamera.Constants.Type.back,
  };

  onTakePicture = async () => {
    const picture = await takePicture(this.reference);

    console.log(picture);

    // TODO: Descomentar o código abaixo e mandar a imagem para o back-end.

    // const body = new FormData();

    // body.append('photo', {
    //   uri: picture.uri,
    //   type: 'image/jpeg',
    //   name: 'testPhotoName'
    // });

    // const response = await fetch('', {
    //   body,
    //   method: 'POST',
    // });

    // const x = await response.json();
  };

  onLogout = async () => {
    await Authentication.unauthenticate();
    this.props.navigation.navigate('Guest');
  };

  setReference = (reference) => {
    if (this.reference === reference)
      return;
    this.reference = reference;
  };

  render() {
    return (
      <Screen>
        <RNCamera
          ref={ this.setReference }
          type={ this.state.type }
          style={ styles.preview }
          flashMode={ RNCamera.Constants.FlashMode.off }
          permissionDialogTitle={ 'Permission to use camera' }
          permissionDialogMessage={ 'We need your permission to use your camera phone' }
        />
        <Button title="Okay" onPress={ this.onTakePicture } />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  }
});

export default ScannerScreen;
