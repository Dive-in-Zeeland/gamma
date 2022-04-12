import React from 'react';
import { StyleSheet, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';

interface IUpgradeButton {
  toggleModal: () => void;
}

const UpgradeButton: React.FC<IUpgradeButton> = ({ toggleModal }) => {
  return (
    <View style={styles.Upgrades}>
      <AwesomeButton
        backgroundColor="#ffffff"
        textColor="#abaec0"
        backgroundDarker="#bcc1db"
        backgroundActive="#ffffff"
        onPress={toggleModal}
        borderWidth={2}
        borderColor="#ffffff"
        textSize={30}
        width={300}
        height={70}
        raiseLevel={5}
      >
        Upgrades
      </AwesomeButton>
    </View>
  );
};

export default UpgradeButton;

const styles = StyleSheet.create({
  Upgrades: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 99,
    bottom: 20,
  },
});
