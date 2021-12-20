import React from 'react';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

import Body from 'style/layout/Body';

export const WebViewStyled = styled(WebView)`
  flex: 1;
  border-radius: 15px;
  margin: 10px;
  border-width: 2px;
  border-color: teal;
  align-items: center;
  justify-content: center;
`;

const GameScreen = () => (
  <Body>
    <WebViewStyled source={{ uri: 'https://puginarug.com/' }} />
  </Body>
);

export default GameScreen;
