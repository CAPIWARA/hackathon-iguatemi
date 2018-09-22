import { Alert } from 'react-native';

/**
 * Exibe uma mensagem para o usuário.
 */
const showMessage = (message) => {
  Alert.alert(message);
};

export default { showMessage };
