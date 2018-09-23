import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = ({
  source,
  containerStyle
}) => (
  <View style={[ styles.container, containerStyle ]}>
    {
      source && (
        <Image
          style={ styles.avatar }
          source={{ uri: source }}
          resizeMode="cover"
        />
      )
    }
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
