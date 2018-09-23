import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Block = ({ style, onPress, children }) => (
  <TouchableOpacity
    style={[ styles.container, style ]}
    onPress={ onPress }
    activeOpacity={ 0.65 }
  >
    { children }
  </TouchableOpacity>
);

const BLOCK_SIZE = 60;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minHeight: BLOCK_SIZE,
    borderRadius: BLOCK_SIZE,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    backgroundColor: '#F3F3F3',
  }
});

export { BLOCK_SIZE };

export default Block;
