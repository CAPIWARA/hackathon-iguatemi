import React, { Component } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Fill from '@/components/Fill';
import Text from '@/components/Text';
import Screen from '@/components/Screen';
import Avatar, { AVATAR_SIZE } from '@/components/Avatar';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import HomeStartButton from '@/components/Home/HomeStartButton';
import HomeServicesItems from '@/components/Home/HomeServicesItems';

/**
 * Serviços.
 */
import { recoverUser } from '@/services/user';
import { recoverItems } from '@/services/cart';
import { recoverScore } from '@/services/score';

class HomeScreen extends Component {
  state = {
    items: [],
    score: 0,
  };

  onMoveToScanner = () => this.props.navigation.push('Scanner');

  onLoad = async () => {
    const [ user, items, score ] = await Promise.all([
      recoverUser(),
      recoverItems(),
      recoverScore(),
    ]);

    this.setState({ user, items, score });
  };

  componentDidMount () {
    this.onLoad();
  }

  get score () {
    return Number(this.state.score)
      .toFixed(0)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  render () {
    return (
      <Screen
        onFocus={ this.onLoad }
        navigation={ this.props.navigation }
        isDarkStatusBar
      >
        <Fill style={ styles.circle } />
        <View style={ styles.space  }>
          <Text style={ styles.score }>
            { this.score }
            <Text style={ styles.text }> pontos</Text> 
          </Text>
        </View>
        <Avatar
          source={ this.state.user && this.state.user.avatar }
          containerStyle={ styles.avatar }
        />
        <Text style={ styles.name }>{ this.state.user && this.state.user.name }</Text>

        <HomeStartButton onPress={ this.onMoveToScanner }  />

        <HomeServicesItems />
      </Screen>
    );
  }
}

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const CIRCLE_SIZE = SCREEN_WIDTH + (SCREEN_WIDTH / 3);

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Prata-Regular',
    fontSize: 22,
  },

  text: { fontSize: 20 },

  score: {
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'Lato-Light',
  },

  space: {
    height: CIRCLE_SIZE - CIRCLE_SIZE / 1.5 - getStatusBarHeight() - AVATAR_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
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
