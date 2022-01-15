import React from 'react';
import { View } from 'react-native';

const LineGradient = () => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 10,
        height: '100%',
        width: '100%',
      }}
      pointerEvents="none"
    >
      <View
        style={{
          position: 'absolute',
          zIndex: 9999,
          backgroundColor: '#C6D9FF',
          borderRadius: 30,
          left: '70%',
          top: '-1%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 999,
          backgroundColor: '#A4B8FF',
          borderRadius: 30,
          left: '55.5%',
          top: '-1%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          backgroundColor: '#8399EF',
          borderRadius: 30,
          left: '40%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          backgroundColor: '#617BCE',
          borderRadius: 30,
          left: '40.5%',
          top: '-10%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg' }],
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          backgroundColor: '#3F5EAD',
          borderRadius: 30,
          left: '41%',
          top: '-20%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg' }],
        }}
      />
    </View>
  );
};

export default LineGradient;
