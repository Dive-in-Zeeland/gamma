import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  QrContainerHelp,
  QrSectionHelp,
  ContainerHelp,
  Main,
} from '../components/styled'


const MapHelpScreen = ({ navigation: nav }) => {

  return (
    (<Main>
      <ContainerHelp>
        <QrSectionHelp>
          <QrContainerHelp>
            <View>
              <Ionicons name="arrow-back" size={40} color="teal" onPress={() => { nav.goBack() }} />
            </View>
            <Text style={{ margin: 20 }}>
              MAP HELPER
            </Text>
          </QrContainerHelp>
        </QrSectionHelp>
      </ContainerHelp>
    </Main>)
  );
}

export default MapHelpScreen;
