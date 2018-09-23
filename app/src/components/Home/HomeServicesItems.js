import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Text from '@/components/Text';

/**
 * Ícones.
 */
import BagIcon from '@/../assets/icons/Bag.png';
import KeyIcon from '@/../assets/icons/Key.png';
import GiftIcon from '@/../assets/icons/Gift.png';
import HeartIcon from '@/../assets/icons/Heart.png';
import HangerIcon from '@/../assets/icons/Hanger.png';
import HistoryIcon from '@/../assets/icons/History.png';
import HomeServicesItem from '@/components/Home/HomeServicesItem';

const HomeServicesItems = ({ onStart }) => {
  const items = [
    {
      name: 'Favoritos',
      icon: HeartIcon,
    },
    {
      name: 'Carregador de Compras',
      icon: BagIcon,
    },
    {
      name: 'Histórico',
      icon: HistoryIcon,
    },
    {
      name: 'Personal Shopper',
      icon: HangerIcon,
    },
    {
      name: 'Guarda Volumes',
      icon: KeyIcon,
    },
    {
      name: 'Embalagens',
      icon: GiftIcon,
    }
  ];

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Serviços</Text>

      <ScrollView style={ styles.items }>
        {
          items.map((props, index) => <HomeServicesItem { ...props } key={ index } />)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    border: 1,
  },

  items: {
    height: 110,
  },
});

export default HomeServicesItems;
