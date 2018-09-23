import { RNCamera } from 'react-native-camera';

/**
 * Obtém o tipo de câmera inverso ao recebido.
 * @param type - Tipo da câmera.
 */
export const inverseCameraType = (type) => {
  if (type === RNCamera.Constants.Type.back)
    return RNCamera.Constants.Type.front;
  return RNCamera.Constants.Type.back;
};
