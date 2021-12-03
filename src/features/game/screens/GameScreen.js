import React from "react";
import {
  Container,
  Home,
  Main,
} from '../components/styled'


const GameScreen = ({ navigation: nav }) => {
  return (
    (<Main>
      <Home>
        <Container source={{ uri: "https://puginarug.com/" }} />
      </Home>
    </Main>)
  );
};

export default GameScreen;
