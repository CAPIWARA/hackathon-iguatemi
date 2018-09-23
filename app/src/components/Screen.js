import React, { Component } from 'react';
import {
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

const { height: SCREEN_SIZE } = Dimensions.get('screen');

class Screen extends Component {
  call = (name) => (payload) => {
    const λ = this.props[name];
    return void (typeof λ === 'function' && λ(payload));
  };

  componentDidMount () {
    const navigation = this.props.navigation;
    if (!navigation)
      return;
    navigation.addListener('didBlur', this.call('onBlur'));
    navigation.addListener('didFocus', this.call('onFocus'));
    navigation.addListener('willBlur', this.call('onBeforeBlur'));
    navigation.addListener('willFocus', this.call('onBeforeFocus'));
  }

  render () {
    const bar = this.props.isDarkStatusBar ? 'light-content' : 'dark-content';

    return (
      <View style={ styles.container }>
        <StatusBar barStyle={ bar }/>
        <View>{  }</View>
        <SafeAreaView style={ styles.screen }>
          { this.props.children }
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_SIZE,
    backgroundColor: '#FFFFFF',
  },

  screen: { flex: 1 },
});

export { SCREEN_SIZE };

export default Screen;
