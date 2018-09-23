import { AsyncStorage } from 'react-native';
import Notification from '@/domains/Notification/services';

const CART_ITEMS_KEY = 'CART_ITEMS';

/**
 * Carrega os items do carrinho de compras.
 */
export const recoverItems = async () => {
  try {
    const items = await AsyncStorage.getItem(CART_ITEMS_KEY);
    return JSON.parse(items || '[]');
  } catch (error) {
    Notification.showMessage('Erro ao carregar os items do carrinho de compras.');
    return [];
  }
};

/**
 * Salva os items do carrinho de compras.
 * @param items - Items do carrinho de compras.
 */
export const saveItems = async (items) => {
  try {
    await AsyncStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
  } catch (error) {
    Notification.showMessage('Erro ao salvar os items do carrinho de compras.');
  }
};
