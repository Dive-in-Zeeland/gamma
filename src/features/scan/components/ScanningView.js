import React from 'react';
import { Button } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ScanButton,
  Barcode,
  Container,
  ModalHelper,
  QrText,
  QrTarget,
  Home,
  Main,
} from './styled'



const ScanningView = ({
  isScanned,
  handleBarCodeScanned,
  reset,
  nav,
}) => (
  <Main>
    <Home>
      <QrTarget />
      <QrText>QR Code Target</QrText>
      <ModalHelper>
        <Ionicons name="help-circle" size={40} color="white" onPress={() => { nav.navigate("ScanHelpScreen") }} />
      </ModalHelper>
      <Container>
        <Barcode onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned} />
        {isScanned &&
          (
            <ScanButton>
              <Button
                style={{ width: "20%" }}
                title={"Scan again"}
                onPress={() => reset()}
                color="black"
              />
            </ScanButton>
          )
        }
      </Container>
    </Home>
  </Main>
)

export default ScanningView;