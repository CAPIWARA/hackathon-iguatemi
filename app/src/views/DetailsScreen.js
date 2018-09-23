import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Screen from '@/components/Screen';
import LinearGradient from 'react-native-linear-gradient';
import HeartIcon from '../../assets/icons/Heart.png';
import { recoverProduct } from '@/services/product';
import Text from '@/components/Text';
import Radio from 'react-native-simple-radio-button';
import Fill from '@/components/Fill';

const props = [
  {
    label: 'Retirar na Loja',
    value: 0 
  },
  {
    label: 'Receber em Casa',
    value: 1
  },
];

class DetailsScreen extends Component {
  state = {
    product: undefined,
    value: 0
  };

  onLoad = async () => {
    const product = await recoverProduct();
    this.setState({ product });
  };

  componentDidMount () {
    this.onLoad();
  }

  render () {
    return (
      <Screen
        navigation={ this.props.navigation }
        isBackAllowed
        isDarkStatusBar
        onFocus={ this.onLoad }
        header={
          <Image source={ HeartIcon } />
        }
      >
        <LinearGradient
          style={ styles.background }
          end={{ x: 0, y: 1 }}
          start={{ x: 0, y: 0 }}
          colors={[ 'rgba(0,0,0, .95)', 'rgba(0,0,0, .2)', 'rgba(0,0,0, 0)' ]}
        />

        <Image
          style={ styles.banner }
          source={{ uri: this.state.product && this.state.product.image }}
        />

        <View style={ styles.block }>
          <Text style={ styles.name }>
            { (this.state.product && this.state.product.name || '').toUpperCase() }
          </Text>

          <Text style={ styles.store }>
            por { this.state.product && this.state.product.store }
          </Text>

          <Text style={ styles.price }>{ this.state.product && this.state.product.price }</Text>
        </View>

        <View style={ styles.block }>
          <Radio
            initial={ 0 }
            onPress={ (value) => this.setState({ value }) }
            radio_props={ props }
          />
        </View>

        <TouchableOpacity>
          <Fill style={ styles.button }>

          </Fill>
        </TouchableOpacity>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    width: '200%',
    height: 250,
    position: 'absolute',
  },

  banner: {
    width: '100%',
    height: 260,
    zIndex: -1
  },

  block: {
    height: 150,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0, .2)',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  name: {
    fontFamily: 'Prata-Regular',
    fontSize: 22,
  },

  store: {
    fontFamily: 'Lato-Regular',
    fontSize: 16
  },

  price: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default DetailsScreen;

