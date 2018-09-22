import React from 'react';
import { Text as NativeText } from 'react-native';

const Text = ({
  children = '',
  ...props,
}) => <NativeText { ...props }>{ children }</NativeText>;

export default Text;
