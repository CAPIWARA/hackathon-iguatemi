import React from 'react';
import { Text as NativeText } from 'react-native';

/**
 * Famílias de fonte.
 */
const families = {
  Title: 'Prata-Regular',
  Regular: 'OpenSans-Light',
};

/**
 * Tamanhos de fonte.
 */
const sizes = {
  'XS': 8,
  'SM': 12,
  'MD': 16,
  'LG': 20,
  'XL': 26,
};

/**
 * Cores de fonte.
 */
const colors = {
  'Light': '#FFFFFF',
  'Default': '#000000',
};

const Text = ({
  style,

  size = 'MD',
  color = 'Default',
  family = 'Regular',
  children = '',
}) => {
  const styles = [
    style, {
      color: colors[color],
      fontSize: sizes[size],
      fontFamily: families[family],
    }
  ];

  return <NativeText style={ styles }>{ children }</NativeText>;
};

export default Text;
