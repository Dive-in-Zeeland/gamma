import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function IntroTittle() {
  return (
    <View style={styles.Upgrades}>
      <Text
        style={{
          fontSize: 70,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Fisher...
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Create your fish monopoly!
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Click and collect - time wasting game.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Upgrades: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 999,
    bottom: '49%',
    left: '7%',
  },
});
