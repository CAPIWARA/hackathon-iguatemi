import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@/components/Text';
import Fill from '@/components/Fill';

const HomeServicesItem = ({ icon, name, onPress, ...props }) => (
  <TouchableOpacity onPress={ onPress }>
    <Fill style={ styles.circle }>
      <Image style={ styles.figure } source={ icon } />
    </Fill>

    <Text style={ styles.name } numberOfLines={ 2 }>{ name }</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  figure: {
    width: 35,
    height: 27.63157894736842,
    marginRight: 15,
  },

  circle: {
    width: 70,
    height: 70,
    alignItems: 'center',
    borderRadius: 70,
    justifyContent: 'center',
  },

  name: {
    marginTop: 5,

    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: '#000000',
    width: '100%'
  },

});

export default HomeServicesItem;
