import React, { Component } from 'react';
import Text from '@/components/Text';
import Screen from '@/components/Screen';

class HomeScreen extends Component {
  state = {
    items: 0,
    user: {
      avatar: '',
    },
  };

  onPressScanner = () => {

  };

  onLoad = () => {};

  render () {
    return (
      <Screen
        onFocus={ this.onLoad }
        navigation={ this.props.navigation }
      >
      </Screen>
    );
  }
}

export default HomeScreen;
