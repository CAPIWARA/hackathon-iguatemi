import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AvatarImage from '../../assets/images/Avatar.jpeg';

const Avatar = ({ containerStyle }) => (
  <View style={[ styles.container, containerStyle ]}>
    <Image
      style={ styles.avatar }
      source={ AvatarImage }
      resizeMode="cover"
    />
  </View>
);

const AVATAR_SIZE = 128;

const AVATAR_PADDING = 10;

const styles = StyleSheet.create({
  container: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    backgroundColor: '#FFFFFF',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    overflow: 'hidden'
  },

  avatar: {
    width: AVATAR_SIZE - AVATAR_PADDING,
    height: AVATAR_SIZE - AVATAR_PADDING,
  },
});

export default Avatar;

export { AVATAR_SIZE, AVATAR_PADDING };
