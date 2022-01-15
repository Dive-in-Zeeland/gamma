import React, { useState } from 'react';
import styled from 'styled-components';
import { StyleSheet, View } from 'react-native';
import StartButton from './components/StartButton';
import IntroTittle from './components/IntroTittle';
import Game from './Game';

const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

const Main = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.colors.main};
`;

const GameScreen = () => {
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <View style={styles.container}>
        <IntroTittle />

        <StartButton press={() => setStarted(true)} />
      </View>
    );
  }

  return (
    <Main>
      <Home>
        <Game />
      </Home>
    </Main>
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
