import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';

const { height: SCREEN_SIZE } = Dimensions.get('window');

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
    return (
      <View style={ styles.container }>
        <SafeAreaView>{ this.props.children }</SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_SIZE,
  },
});

export { SCREEN_SIZE };

export default Screen;
