import React from 'react';
import styled from "styled-components";
import { StyleSheet, Text, View } from 'react-native';



const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;



const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;



const SettingsScreen = () => (
  <Main>
    <Home>
      <Text>
        Setting Screen
      </Text>
    </Home>
  </Main>
);

export default SettingsScreen;