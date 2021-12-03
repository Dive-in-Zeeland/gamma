import styled from "styled-components";
import { View, Text } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner";


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

export const Container = styled(View)`
  /* flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px; */
  flex: 1;
  align-items: center;
  justify-content: center;
`;



export const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;

/* AfterScanView */

export const QuestionContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;


export const QrSection = styled(View)`
  flex: 0.9;
`;





/* ContentView */

export const ButtonContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  border-radius: 15px;
`;

export const QrContainer = styled(View)`
  flex: 1;
  background-color: #fff;
  border-color: teal;
  align-items: center;
  justify-content: center;
`;

export const Icon1 = styled(View)`
  flex: 1;
  background-color: teal;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const HelperContainer = styled(View)`
  flex: 0.1;
  flex-direction: row;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;



/* PermissionView */

/* QuestionView */

export const QuestionViewCancelText = styled(Text)`
  color: white;
`;


export const QuestionViewCancel = styled(View)`
  flex: 0.2;
  background-color: red;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
`;


export const QuestionViewAnswerOptions = styled(View)`
  flex: 1;
  background-color: teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
`;


export const QuestionViewTitleText = styled(Text)`
  margin: 10px;
  color: gray;
`;


export const QuestionViewTitle = styled(View)`
  flex: 0.5;
  border-color: teal;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 15px;
  border-width: 2px;
`;

/* ScanningView */

export const ScanButton = styled(View)`
  position: absolute;
  background-color: teal;
  z-index: 9;
  border-radius: 10px;
  top: 80%;
`;



export const Barcode = styled(BarCodeScanner)`
  width: 90%;
  height: 90%;
  overflow: hidden;
  border-radius: 15px;
  border-color: teal;
  border-width: 4px;
`;



export const QrText = styled(Text)`
  position: absolute;
  z-index: 999;
  elevation: 999;
  color: white;
  top: 66%;
  right: 29%;
  font-size: 20px;
  font-weight: bold;
`;



export const QrTarget = styled(View)`
  position: absolute;
  z-index: 999;
  elevation: 999;
  border-radius: 15px;
  border-color: white;
  border-width: 4px;
  top: 25%;
  right: 20%;
  width: 60%;
  height: 40%;
`;








/* ScoreView */

// none