import React, { PureComponent } from 'react';
import { Button, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { inverseCameraType } from '../../domains/Camera/services';

class Scanner extends PureComponent {
  state = {
    type: RNCamera.Constants.Type.back,
  };

  onToggleType = () => this.setState(
    (_) => ({
      type: inverseCameraType(_.type)
    })
  );

  render () {
    return (
      <QRCodeScanner
        onRead={ this.props.onRead }
        cameraProps={{
          type: this.state.type,
          flashMode: RNCamera.Constants.FlashMode.off,
          permissionDialogTitle: 'Permissões da câmera',
          permissionDialogMessage: 'Para usar a câmera é necessário dar permissão ao aplicativo.'
        }}
        bottomContent={
          <View>
            <Button title="Inverter" onPress={ this.onToggleType } />
          </View>
        }
      />
    )
  }
}

export default Scanner;
