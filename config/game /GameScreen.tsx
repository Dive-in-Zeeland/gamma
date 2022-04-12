import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TitledScreen from 'features/collector/styles/TitledScreen';
import StartButton from './components/StartButton';
import IntroTittle from './components/IntroTittle';
import Game from './components/Game';

const GameScreen = () => {
  const [started, setStarted] = useState(false);

  return (
    <TitledScreen title="Clicker game" nobox>
      {started ? (
        <Game />
      ) : (
        <View style={styles.container}>
          <IntroTittle />
          <StartButton press={() => setStarted(true)} />
        </View>
      )}
    </TitledScreen>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
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
