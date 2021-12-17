import { useAtom } from "jotai";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { counterAtom, fishPerSecAtom } from "../Store/props";


export default function Card(props){

  const [total, setTotal] = useAtom(counterAtom);
  const [fishPerSec, setFishPerSec] = useAtom(fishPerSecAtom);

  const [nameObject, setNameObject] = useAtom(props.obj);
  const [amount, setAmount] = useAtom(props.count)
  const [cost, setCost] = useAtom(props.price);


  function BuyUpgrade() {

    if (total>= cost) {
      setAmount(amount + 1);
      setFishPerSec(nameObject.consta + fishPerSec);
      setTotal(total - cost);
      setCost(nameObject.basePrice * (1.15**(amount)));   
    }
  }

    return(
      <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', textTransform: 'capitalize',}}>
                {nameObject.name}
              </Text>
              <View>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {amount} {nameObject.name} at work
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {nameObject.name} price: {Math.floor(cost)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.BuyButton}>
            <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  BuyUpgrade();
                }}
              >
                <Text style={{ fontFamily:"Futura", color: '#a0e3e3', fontSize:30, fontWeight:'bold'}}>
                Buy
                </Text>
              </TouchableOpacity>
          </View>
        </View>

    );

}

const styles = StyleSheet.create({
  BuyButton:{
      position:'absolute',
      height:"100%",
      width:"40%",
      justifyContent: 'center',
      alignItems:'center',
      alignSelf:'flex-end',
      zIndex:99,
  },
  mainCardView: {
      margin:5,
      padding:20,
      flex:0.2,
      justifyContent: 'center',
      alignItems:'flex-start',
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: '#ccd0e7',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 3,
  },
});

