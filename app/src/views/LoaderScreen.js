import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Screen from '@/components/Screen';
import Authentication from '@/domains/Authentication/services';

class LoaderScreen extends Component {
  async componentDidMount () {
    const isAuthenticated = await Authentication.isAuthenticated();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.props.navigation.navigate(isAuthenticated ? 'User' : 'Guest');
  }

  render () {
    return (
      <Screen>
        <View>
          <Text>Carregando...</Text>
        </View>
      </Screen>
    )
  }
}

export default LoaderScreen;
