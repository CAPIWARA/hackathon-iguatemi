import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Text from '@/components/Text';
import Block from '@/components/Block';
import CameraIcon from '../../../assets/icons/Camera-Contrast.png';

const HomeStartButton = ({ onPress }) => (
  <Block onPress={ onPress }>
    <Image style={ styles.figure } source={ CameraIcon } />
    <Text style={ styles.statement } numberOfLines={ 2 }>
      Fotografe os produtos <Text style={ styles.strong }>myOne</Text> e compre-os facilmente.
    </Text>
  </Block>
)

const styles = StyleSheet.create({
  figure: {
    width: 35,
    height: 27.63157894736842,
    marginRight: 15,
  },

  statement: {
    flex: 1,
    fontFamily: 'Lato-Light',
    fontSize: 16,
    color: '#707070',
    width: '100%'
  },

  strong: { fontFamily: 'Lato-Regular' },
});

export default HomeStartButton;
