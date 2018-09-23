import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

/**
 * Telas.
 */
import HomeScreen from '@/views/HomeScreen';
import LoginScreen from '@/views/LoginScreen';
import LoaderScreen from '@/views/LoaderScreen';
import ScannerScreen from '@/views/ScannerScreen';

/**
 * Mapa de telas para os visitantes.
 */
const screensForGuests = {
  Login: LoginScreen,
};

/**
 * Mapa de telas para os usuários.
 */
const screensForUsers = {
  Home: HomeScreen,
  Scanner: ScannerScreen,
};

/**
 * Componente de navegação.
 */
const Navigator = createSwitchNavigator({
  User: {
    path: 'User',
    screen: createStackNavigator(screensForUsers, {
      headerMode: 'none',
      initialRouteKey: 'Home',
    }),
  },

  Guest: {
    path: 'Guest',
    screen: createStackNavigator(screensForGuests, {
      headerMode: 'none',
      initialRouteKey: 'Login',
    }),
  },

  Loader: {
    path: 'Loader',
    screen: LoaderScreen,
  }
}, { initialRouteName: 'Loader' });

export default Navigator;
