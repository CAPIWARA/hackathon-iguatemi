import { AsyncStorage } from 'react-native';
import Notification from '../Notification/services';

const AUTHENTICATED_STATE_KEY = 'IS_AUTHENTICATED';

/**
 * Verifica se o usuário está autenticado.
 */
const isAuthenticated = async () => {
  try {
    const state = await AsyncStorage.getItem(AUTHENTICATED_STATE_KEY);
    return state !== null;
  } catch (error) {
    Notification.showMessage('Erro ao carregar seu status de autenticação.');
  }
};

/**
 * Autentica o usuário.
 */
const authenticate = async () => {
  try {
    await AsyncStorage.setItem(AUTHENTICATED_STATE_KEY, 'TRUE');
  } catch (error) {
    Notification.showMessage('Erro ao salvar seu status de autenticação.');
  }
};

/**
 * Desautentica o usuário.
 */
const unauthenticate = async () => {
  try {
    await AsyncStorage.removeItem(AUTHENTICATED_STATE_KEY);
  } catch (error) {
    Notification.showMessage('Erro ao salvar seu status de autenticação.');
  }
};

export default {
  isAuthenticated,
  authenticate,
  unauthenticate
};
