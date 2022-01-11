import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAtom } from 'jotai';
import { counterAtom, fishPerSecAtom } from 'features/game/Store/props';
import UpgradeModal from 'features/game/Components/UpModal';
import UpgradeButton from 'features/game/Components/UpgradeButton';
import ClickerBrains from 'features/game/Components/ClickerBrains';

export default function MainFarm() {
  // Main Counter
  const [counter, setCounter] = useAtom(counterAtom);
  const [fishPerSec, setFishPerSec] = useAtom(fishPerSecAtom);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.counterFace}>
        <Text style={styles.pink}>{Math.floor(counter)} 🐠</Text>
      </View>
      <View style={styles.counterSide} />
      <View style={styles.counterShadow} />

      <View style={styles.perSecondFace}>
        <Text style={styles.white}>
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>

      <View style={styles.perSecondSide}>
        <Text
          style={{
            color: '#abaec0',
            fontWeight: 'bold',
            fontSize: 25,
          }}
        >
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>
      <View style={styles.perSecondShadow}>
        <Text
          style={{
            color: 'gray',
            fontWeight: 'bold',
            fontSize: 25,
            opacity: 0.4,
          }}
        >
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>

      <ClickerBrains />

      <UpgradeButton toggleModal={toggleModal} />

      <UpgradeModal toggleModal={toggleModal} isModalVisible={isModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  counterFace: {
    position: 'absolute',
    zIndex: 9999,
    top: 30,
    backgroundColor: 'white',
    width: '60%',
    height: '10%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterSide: {
    position: 'absolute',
    zIndex: 999,
    top: 35,
    backgroundColor: '#bcc1db',
    width: '60%',
    height: '10%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterShadow: {
    position: 'absolute',
    zIndex: 99,
    top: 39,
    backgroundColor: 'gray',
    width: '59%',
    height: '10%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
  },
  perSecondFace: {
    position: 'absolute',
    zIndex: 99999,
    top: 95,
    width: '60%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perSecondSide: {
    position: 'absolute',
    zIndex: 9999,
    top: 98,
    width: '60%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perSecondShadow: {
    position: 'absolute',
    zIndex: 999,
    top: 100,
    width: '60%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pink: {
    color: '#abaec0',
    fontSize: 25,
    fontWeight: 'bold',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#a0e3e3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    shadowColor: 'red',
  },
});
