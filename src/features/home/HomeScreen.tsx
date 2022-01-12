import React, {useState} from 'react';
import {View, Text} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Progress from 'react-native-progress';
import { useAtom } from 'jotai';
import tokensAtom, { TokenType } from 'store/tokens';

const HomeScreen = () => {
  const [tokens] = useAtom(tokensAtom);

  const totalTokens = Object.keys(tokens).length;
  const tokensCollected = Object.values(tokens).reduce((prev, token)=>{
    return (token.isCollected)? prev+1 : prev ;
  }, 0);

  return (
    <View style={{flex:1, backgroundColor: 'teal'}}>
        <Text style={{
          position:'absolute',
          zIndex:99,
          top: '41%',
          left: '5%',
          fontSize:40,
          fontWeight:'bold',
          color:'white'
        }}>
          Dive in Zeeland
        </Text>
      
        <View style={{
          position:'absolute',
          zIndex:99,
          left: '3%',
          top:'50%',
          backgroundColor: 'white',
          height: '30%',
          width: '94%',
          borderRadius:15,
        }}/>
  
        <View style={{
          position:'absolute',
          zIndex:99,
          left: '3%',
          top:'70%',
          backgroundColor: 'white',
          height: '30%',
          width: '94%',
          borderRadius: 10,
        }}/>
  
       <View style={{
        position:'absolute',
        zIndex:999,
        left: '5%',
        top:'52%',
        backgroundColor: '#00a7a7',
        height: '19%',
        width: '90%',
        borderRadius: 10,
      }}>
        <View style={{
          position:'absolute',
          zIndex:999,
          left: '5%',
          top:'15%',
          width: '90%'
        }}>
        <Progress.Bar progress={tokensCollected/totalTokens} width={null} height={40} color={'#64E3A0'} borderWidth={3} />
        </View>
        <Text style={{
          position:'absolute',
          zIndex:999,
          top:'65%',
          left: '5%',
          fontSize:15,
          fontWeight:'bold',
          color: 'white',
        }}>
          Token collection game progress!
        </Text>
      </View>
  
      <View style={{
        position:'absolute',
        zIndex:999,
        left: '5%',
        top:'74%',
        backgroundColor: '#00a7a7',
        height: '24%',
        width: '42%',
        borderRadius: 10,
      }}>
        <Ionicons
        name="gift"
        size={60}
        color="white"
        style={{
          position: "absolute",
          zIndex: 999,
          left: "33%",
          top: "15%",
        }}
        />
        <Text style={{
          position: "absolute",
          left: "20%",
          top: "60%",
          fontSize:25,
          fontWeight:'bold',
          color:'white'
        }}>
          Free Gift
        </Text>
      </View>    
  
      <View style={{
        position:'absolute',
        zIndex:999,
        left: '53%',
        top:'74%',
        backgroundColor: '#00a7a7',
        height: '24%',
        width: '42%',
        borderRadius: 10,
      }}>
        <Ionicons
        name="school"
        size={60}
        color="white"
        style={{
          position: "absolute",
          zIndex: 999,
          left: "33%",
          top: "15%",
        }}
        />
        <Text style={{
          position: "absolute",
          left: "23%",
          top: "60%",
          fontSize:25,
          fontWeight:'bold',
          color:'white'
        }}>
          Tutorial
        </Text>
      <View/>    
  
    </View>
    </View>
  );
};

export default HomeScreen;
