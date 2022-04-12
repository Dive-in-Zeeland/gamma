import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSnapshot } from 'valtio';
import upgradesValt, { UpgradeType } from '../store/upgrades';
import counterValt from '../store/counter';

interface ICard {
  upgradeValt: UpgradeType;
  upgradeIndex: number;
}

const Card: React.FC<ICard> = ({ upgradeValt, upgradeIndex }) => {
  const upgradeSnap = useSnapshot(upgradeValt);
  const counterSnap = useSnapshot(counterValt);

  function buy() {
    if (counterSnap.value < upgradeSnap.getPrice()) return;

    counterValt.substract(upgradeSnap.getPrice());
    counterValt.addFps(upgradeSnap.fps);

    if (
      upgradeSnap.amount === 0 &&
      counterSnap.upgradesActive < upgradesValt.length
    ) {
      counterValt.setImage(upgradeSnap.image);
      counterValt.activateMore();
    }

    upgradeValt.addOne();
  }

  function isActive() {
    return upgradeIndex < counterSnap.upgradesActive;
  }

  if (!isActive()) return null;

  return (
    <View style={styles.mainCardView}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            {upgradeSnap.name}
          </Text>
          <View>
            <Text
              style={{
                color: 'gray',
                fontSize: 12,
              }}
            >
              {upgradeSnap.amount} {upgradeSnap.name} at work
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 12,
              }}
            >
              {upgradeSnap.name} price: {Math.floor(upgradeSnap.getPrice())}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.BuyButton}>
        <TouchableOpacity onPress={buy}>
          <Text style={{ color: '#a0e3e3', fontSize: 30, fontWeight: 'bold' }}>
            Buy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  BuyButton: {
    position: 'absolute',
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    zIndex: 99,
  },
  mainCardView: {
    margin: 5,
    padding: 20,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#ccd0e7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
});
