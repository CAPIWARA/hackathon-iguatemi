import React, { Component } from 'react';
import {
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import BackIcon from '../../assets/icons/Back.png';
import BackDarkIcon from '../../assets/icons/Back-Dark.png';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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

  onMoveBackwards = () => this.props.navigation.goBack();

  render () {
    const bar = this.props.isDarkStatusBar ? 'light-content' : 'dark-content';
    const icon = this.props.isDarkStatusBar ? BackIcon : BackDarkIcon;

    return (
      <View style={ styles.container }>
        <StatusBar barStyle={ bar }/>
        <SafeAreaView style={ styles.screen }>
          { this.props.children }
        </SafeAreaView>
        {
          this.props.isBackAllowed && (
            <View style={ styles.header }>
              <TouchableOpacity
                style={ styles.arrow }
                onPress={ this.onMoveBackwards }
                activeOpacity={ 0.65 }
              >
                <Image source={ icon } />
              </TouchableOpacity>
              { this.props.header }
            </View> 
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    height: SCREEN_SIZE,
    backgroundColor: '#FFFFFF',
  },

  screen: { flex: 1 },

  header: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 0,
    right: 0,
    width: '100%',
    minHeight: 60,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  arrow: {
    width: 40,
    height: 27.76,
  }
});

export { SCREEN_SIZE };

export default Screen;
