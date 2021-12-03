import { View } from 'react-native';
import styled from "styled-components";


export const QrContainer = styled(View)`
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
`;



export const QrSection = styled(View)`
  flex: 0.8;
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



export const Container = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;



export const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;