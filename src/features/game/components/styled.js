import styled from "styled-components";
import { View } from "react-native";
import { WebView } from "react-native-webview";

export const Container = styled(WebView)`
  flex: 1;
  border-radius: 15px;
  margin: 10px;
  border-width: 2px;
  border-color: teal;
  align-items: center;
  justify-content: center;
`;

export const Home = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

export const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;