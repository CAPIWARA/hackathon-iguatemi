import React, { Component } from 'react';
import { Button } from 'react-native';
import Text from '@/components/Text';
import Screen from '@/components/Screen';
import { recoverItems } from '../services/cart';

class HomeScreen extends Component {
  state = {
    items: [],
  };

  onMoveToScanner = () => this.props.navigation.push('Scanner');

  onLoad = async () => {
    const items = await recoverItems();
    this.setState({ items });
  };

  componentDidMount () {
    this.onLoad();
  }

  render () {
    return (
      <Screen
        onFocus={ this.onLoad }
        navigation={ this.props.navigation }
      >
        <Text>{ this.state.items.length } items no carrinho.</Text>
        <Button title="Câmera" onPress={ this.onMoveToScanner } />
      </Screen>
    );
  }
}

export default HomeScreen;
