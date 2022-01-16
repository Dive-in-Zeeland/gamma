import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Card from 'features/game/components/Card';

import upgradesValt from '../store/upgrades';

interface IUpgradeModal {
  isVisible: boolean;
  close: () => void;
}

const UpgradeModal: React.FC<IUpgradeModal> = ({ isVisible, close }) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['down']}
      style={styles.modalContainer}
      onSwipeComplete={close}
    >
      <View style={styles.UpgradeLabel}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Upgrade your Empire
        </Text>
      </View>

      {upgradesValt.map((valt, index) => (
        <Card upgradeValt={valt} upgradeIndex={index} key={index} />
      ))}

      <Pressable onPress={close} style={styles.QuitButton}>
        <Text style={styles.QuitButtonText}>Close</Text>
      </Pressable>
    </Modal>
  );
};

export default UpgradeModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.9,
    padding: 20,
    margin: 30,
    marginTop: 90,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  QuitButton: {
    position: 'absolute',
    backgroundColor: '#a0e3e3',
    height: '10%',
    width: '50%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 99,
    bottom: -35,
  },
  QuitButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  UpgradeLabel: {
    position: 'absolute',
    backgroundColor: '#a0e3e3',
    height: '10%',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 99,
    top: -35,
  },
  Upgrades: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 99,
    bottom: 20,
  },
  Clicks: {
    position: 'absolute',
    zIndex: 999,
  },
});
