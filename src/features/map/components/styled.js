import { View } from 'react-native';
import styled from "styled-components";
import MapView from 'react-native-maps';



/* MapScreen */

export const Map = styled(MapView)`
  height: 90%;
  width: 90%;
  border-width: 2px;
  border-color: teal;
  border-radius: 15px;
`;



export const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;



export const Location = styled(View)`
  flex: 1;
`;



export const ModalHelper = styled(View)`
  position: absolute;
  z-index: 9;
  elevation: 9;
  /* box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.3); */
  border-radius: 360px;
  top: 7%;
  left: 9%;
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

/* MapHelpScreen */

export const QrContainerHelp = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: teal;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const QrSectionHelp = styled(View)`
  flex: 0.5;
`;


export const ContainerHelp = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;

