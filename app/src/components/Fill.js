import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Fill = ({ children, ...props }) => (
  <LinearGradient
    { ...props }
    end={{ x: 1, y: 1 }}
    start={{ x: 0, y: 0 }}
    colors={[ '#333333', '#000000' ]}
  >
    { children }
  </LinearGradient>
);

export default Fill;
