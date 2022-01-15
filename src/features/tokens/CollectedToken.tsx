import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TokenType } from 'store/tokens';

export interface ICollectedToken {
  token: TokenType;
}

const CollectedToken: React.FC<ICollectedToken> = ({ token }) => {
  return (
    <View style={styles.TokenCollected}>
      <Ionicons
        name="checkmark-circle"
        size={30}
        color="white"
        style={{
          position: 'absolute',
          zIndex: 999,
          right: '3%',
          top: '30%',
        }}
      />
      <View style={styles.TokenNameCollected}>
        <Text style={styles.TokenNameText}>{token.place}</Text>
      </View>

      <View style={styles.DividerCollected} />

      <View style={styles.TokenStatus}>
        <Text style={styles.TokenPlaceText}>Token Collected</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TokenCollected: {
    backgroundColor: '#8399EF',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    height: 95,
    margin: 8,
  },
  TokenContainer: {
    backgroundColor: '#00bbbb',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#00bbbb',
    height: 95,
    width: '85%',
    margin: 8,
  },
  TokenName: {
    position: 'absolute',
    zIndex: 99999,
    left: '28%',
    top: '25%',
  },
  TokenNameCollected: {
    position: 'absolute',
    zIndex: 99999,
    left: '5%',
    top: '25%',
  },
  TokenNameText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  TokenPlace: {
    position: 'absolute',
    zIndex: 99999,
    left: '28%',
    top: '58%',
  },
  TokenStatus: {
    position: 'absolute',
    zIndex: 99999,
    left: '5%',
    top: '58%',
  },
  TokenPlaceText: {
    fontSize: 10,
    color: 'white',
  },
  TokenContainerDivider: {
    position: 'absolute',
    zIndex: 99999,
    left: '28%',
    top: '52%',
    height: '2%',
    width: '55%',
    backgroundColor: 'white',
  },
  DividerCollected: {
    position: 'absolute',
    zIndex: 99999,
    left: '5%',
    top: '52%',
    height: '2%',
    width: '78%',
    backgroundColor: 'white',
  },
  TokenMapContainer: {
    position: 'absolute',
    zIndex: 9999,
    left: -3,
    top: -3,
    height: '100%',
    width: '25%',
  },
  TokenMapView: {
    height: '95%',
    width: '95%',
    borderRadius: 12,
    margin: 5,
  },
});

export default CollectedToken;
