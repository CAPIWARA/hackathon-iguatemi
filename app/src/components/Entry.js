import React from 'react';
import { TextInput, View } from 'react-native';
import Text from './Text';

const Entry = ({
  name = '',
  value = '',
  onChange,
  placeholder = '',
  ...props
}) => (
  <View>
    <Text>{ name }</Text>
    <TextInput
      { ...props }
      value={ value }
      onChange={ (e) => onChange(e.nativeEvent.text) }
      placeholder={ placeholder }
    />
  </View>
);

export default Entry;
