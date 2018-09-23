import React, { Component } from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Authentication from '@/domains/Authentication/services';
import Screen from '@/components/Screen';
import { takePicture } from '@/domains/Camera/services';
import { PulseIndicator } from 'react-native-indicators';

class ScannerScreen extends Component {
  reference = undefined;

  state = {
    type: RNCamera.Constants.Type.back,
    isFetching: false,
  };

  onTakePicture = async () => {
    this.setState({ isFetching: true });
    const picture = await takePicture(this.reference);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    this.setState({ isFetching: false });
    this.props.navigation.navigate('Details');
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
      <Screen
        navigation={ this.props.navigation }
        isBackAllowed 
        isDarkStatusBar
      >
        <RNCamera
          ref={ this.setReference }
          type={ this.state.type }
          style={ styles.preview }
          flashMode={ RNCamera.Constants.FlashMode.off }
          permissionDialogTitle={ 'Permission to use camera' }
          permissionDialogMessage={ 'We need your permission to use your camera phone' }
        />

        <View style={ styles.footer }>
          {
            this.state.isFetching ? (
              <PulseIndicator size={ 100 } color="#FFFFFF" />
            ) : (
              <TouchableOpacity
                style={ styles.button }
                onPress={ this.onTakePicture }
                activeOpacity={ 0.3 }
              />
            )
          }
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
  },

  button: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderRadius: 100,
  },
  
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default ScannerScreen;
