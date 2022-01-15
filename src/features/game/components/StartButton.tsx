import React from 'react';
import { StyleSheet, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';

interface IStartButton {
  press: () => void;
}

const StartButton: React.FC<IStartButton> = ({ press }) => {
  return (
    <View style={styles.Upgrades}>
      <AwesomeButton
        backgroundColor="#ffffff"
        textColor="#abaec0"
        backgroundDarker="#bcc1db"
        backgroundActive="#ffffff"
        onPress={press}
        borderWidth={2}
        borderColor="#ffffff"
        textSize={30}
        width={300}
        height={70}
        raiseLevel={5}
      >
        Start
      </AwesomeButton>
    </View>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  Upgrades: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 99,
    bottom: '32%',
  },
});
