import React from 'react';

import Body from 'components/Body';
import TextBox from 'components/TextBox';
import BorderCard from 'components/BorderCard';
import TextBoxContainer from 'components/TextBoxContainer';
import { TextM10, TextM20 } from 'components/Text';

const HomeScreen = () => (
  <Body>
    <TextBoxContainer>
      <TextBox>Dive in Zeeland</TextBox>
    </TextBoxContainer>

    <BorderCard>
      <TextM10>
        This is out token collection game called DIZ-GAME. It is an interactive game for children to
        get to know better the underwater world of Zeeland.
      </TextM10>

      <TextM10>There are 5 different screens. Home, Token, Map, Camera and Settings.</TextM10>

      <TextM10>
        In the future this screen will describe the initial game and its rules. And also have a
        links to Gift code and Played game (But to play this game you must collect all the tokens).
      </TextM10>

      <TextM20>
        For best user experience right now, please you IOS devices. They are better optimized.
      </TextM20>
    </BorderCard>
  </Body>
);

export default HomeScreen;
