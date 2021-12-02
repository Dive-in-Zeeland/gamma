import React from 'react';
import styled from "styled-components";
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";



const QrContainer = styled(View)`
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



const QrSection = styled(View)`
  flex: 0.5;
`;



const Container = styled(View)`
  flex: 1;
  margin: 10px;
  background-color: white;
  border-radius: 15px;
`;



const Main = styled(View)`
  flex: 1;
  background-color: teal;
`;



const ScanHelpScreen = ({ navigation: nav }) => {

  return (
    (<Main>
      <Container>
        <QrSection>
          <QrContainer>
            <View>
              <Ionicons name="arrow-back" size={40} color="teal" onPress={() => { nav.goBack() }} />
            </View>
            <Text style={{ margin: 20 }}>
              QR HELPER
            </Text>
          </QrContainer>
        </QrSection>
      </Container>
    </Main>)
  );
}

export default ScanHelpScreen;


