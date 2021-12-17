import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import Card from "./Card";

import {
  Feeder, 
  FisherMan, 
  FishFarm, 
  Incubator, 
  FishFactory,
  FeederAmount, 
  FisherManAmount, 
  FishFarmAmount, 
  IncubatorAmount, 
  FishFactoryAmount,
  FeederPrice, 
  FisherManPrice, 
  FishFarmPrice, 
  IncubatorPrice, 
  FishFactoryPrice,
} 
from '../Store/props'

export default function UpgradeModal(props) {

  return (
    <Modal
        isVisible={props.isModalVisible}
        swipeDirection={["down"]}
        style={styles.modalContainer}
      >
        <View style={styles.UpgradeLabel}>
          <Text
            style={{
              fontFamily: "Futura",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Upgrade your Empire
          </Text>
        </View>

        <Card
          obj={Feeder}
          count={FeederAmount}
          price={FeederPrice}
        />

        <Card
          obj={FisherMan}
          count={FisherManAmount}
          price={FisherManPrice}
        />

        <Card
          obj={FishFarm}
          count={FishFarmAmount}
          price={FishFarmPrice}
        />

        <Card
          obj={Incubator}
          count={IncubatorAmount}
          price={IncubatorPrice}
        />

        <Card
          obj={FishFactory}
          count={FishFactoryAmount}
          price={FishFactoryPrice}
        />

        <View style={styles.QuitButton}>
          <TouchableOpacity style={{}} disabled={false} onPress={props.toggleModal}>
            <Text
              style={styles.QuitButtonText}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.9,
    padding: 20,
    margin: 30,
    marginTop: 90,
    borderRadius: 15,
    backgroundColor: "white",
  },
  QuitButton: {
    position: "absolute",
    backgroundColor: "#a0e3e3",
    height: "10%",
    width: "50%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 99,
    bottom: -35,
  },
  QuitButtonText:{
    fontFamily: "Futura",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  UpgradeLabel: {
    position: "absolute",
    backgroundColor: "#a0e3e3",
    height: "10%",
    width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 99,
    top: -35,
  },
  Upgrades: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 99,
    bottom: 20,
  },
  Clicks: {
    position: "absolute",
    zIndex: 999,
  },
});