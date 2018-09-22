import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';

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
