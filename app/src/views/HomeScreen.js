import React, { Component } from 'react';
import { StyleSheet, Button, Dimensions, View } from 'react-native';
import Fill from '@/components/Fill';
import Text from '@/components/Text';
import Avatar, { AVATAR_SIZE } from '@/components/Avatar';
import Screen from '@/components/Screen';
import { recoverItems } from '@/services/cart';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { recoverScore } from '../services/score';

class HomeScreen extends Component {
  state = {
    items: [],
    score: 0,
  };

  onMoveToScanner = () => this.props.navigation.push('Scanner');

  onLoad = async () => {
    const items = await recoverItems();
    const score = await recoverScore();
    this.setState({ items, score });
  };

  componentDidMount () {
    this.onLoad();
  }

  render () {
    return (
      <Screen
        onFocus={ this.onLoad }
        navigation={ this.props.navigation }
        isDarkStatusBar
      >
        <Fill style={ styles.circle } />
        <View style={ styles.space  }>
          <Text style={ styles.score }>{ this.state.score }</Text>
        </View>
        <Avatar containerStyle={ styles.avatar } />
        <Text>{ this.state.items.length } items no carrinho.</Text>
        <Button title="Câmera" onPress={ this.onMoveToScanner } />
      </Screen>
    );
  }
}

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const CIRCLE_SIZE = SCREEN_WIDTH + (SCREEN_WIDTH / 3);

const styles = StyleSheet.create({
  score: {
    color: '#FFFFFF',
    fontSize: 22,
  },

  space: {
    height: CIRCLE_SIZE - CIRCLE_SIZE / 1.5 - getStatusBarHeight() - AVATAR_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  circle: {
    position: 'absolute',
    top: CIRCLE_SIZE / - 1.5,
    left: SCREEN_WIDTH / - 6,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE
  },

  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default HomeScreen;
