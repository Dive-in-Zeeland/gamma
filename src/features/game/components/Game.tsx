import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UpgradeModal from 'features/game/components/UpgradeModal';
import UpgradeButton from 'features/game/components/UpgradeButton';

import { useSnapshot } from 'valtio';
import counterValt from '../store/counter';
import Aqua from './Aqua';

export default function Game() {
  const counterSnap = useSnapshot(counterValt);
  const [upgradeModalVisible, setUpgradeModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      counterValt.tick(50);
    }, 50);

    return () => clearInterval(interval);
  }, [counterSnap.fps]);

  return (
    <View style={styles.container}>
      <View style={styles.counterFace}>
        <Text style={styles.pink}>{counterSnap.getIntegerValue()} 🐠</Text>
      </View>
      <View style={styles.counterSide} />
      <View style={styles.counterShadow} />

      <View style={styles.perSecondFace}>
        <Text style={styles.white}>{counterSnap.getRoundedFps()} f/s</Text>
      </View>

      <View style={styles.perSecondSide}>
        <Text
          style={{
            color: '#abaec0',
            fontWeight: 'bold',
            fontSize: 25,
          }}
        >
          {counterSnap.getRoundedFps()} f/s
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
          {counterSnap.getRoundedFps()} f/s
        </Text>
      </View>

      <Aqua />

      <UpgradeButton toggleModal={() => setUpgradeModalVisible(true)} />

      <UpgradeModal
        close={() => setUpgradeModalVisible(false)}
        isVisible={upgradeModalVisible}
      />
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
