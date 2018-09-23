import { RNCamera } from 'react-native-camera';
import Notification from '@/domains/Notification/services';

/**
 * Obtém o tipo de câmera inverso ao recebido.
 * @param type - Tipo da câmera.
 */
export const inverseCameraType = (type) => {
  if (type === RNCamera.Constants.Type.back)
    return RNCamera.Constants.Type.front;
  return RNCamera.Constants.Type.back;
};

/**
 * Fotografa usando o método da câmera.
 * @param instance - Uma instância do componente RNCamera.
 */
export const takePicture = async (instance) => {
  try {
    return await RNCamera.prototype.takePictureAsync.call(instance, {
      width: 640,
      quality: 1,
      fixOrientation: true,
    });
  } catch (error) {
    Notification.showMessage('Erro ao tirar uma fotografia.');
  }
}
