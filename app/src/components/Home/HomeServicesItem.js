import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '@/components/Text';
import Fill from '@/components/Fill';

const HomeServicesItem = ({ icon, name, onPress, ...props }) => (
  <TouchableOpacity
    style={ styles.container }
    onPress={ onPress }
    activeOpacity={ 0.65 }
  >
    <Fill style={ styles.circle }>
      <Image
        style={ styles.figure }
        source={ icon }
        resizeMode="contain"
      />
    </Fill>

    <View style={ styles.nameContainer }>
      <Text style={ styles.name }>
        { name }
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },

  figure: {
    width: 40,
  },
  
  circle: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    textAlign: 'center',
    fontFamily: 'Lato-Light',
    fontSize: 12,
    color: '#000000',
  },
  
  nameContainer: {
    marginTop: 5,
    width: '100%',
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeServicesItem;
