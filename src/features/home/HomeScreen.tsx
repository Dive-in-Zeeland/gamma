import React, {useState} from 'react';
import {View, Text} from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Progress from 'react-native-progress';
import { useAtom } from 'jotai';
import tokensAtom, { TokenType } from 'store/tokens';
import Modal from 'react-native-modal';

const HomeScreen = () => {
  const [tokens] = useAtom(tokensAtom);

  const totalTokens = Object.keys(tokens).length;
  const tokensCollected = Object.values(tokens).reduce((prev, token)=>{
    return (token.isCollected)? prev+1 : prev ;
  }, 0);

  return (
    <View style={{flex:1, backgroundColor: 'teal'}}>

        <View style={{
          position:'absolute',
          zIndex:9999,
          backgroundColor: '#00e2e2',
          borderRadius:30,
          left:'70%',
          top:'-1%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg'}],
        }}/>
        <View style={{
          position:'absolute',
          zIndex:999,
          backgroundColor: '#00cece',
          borderRadius:30,
          left:'55.5%',
          top:'-1%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg'}],
        }}/>
        <View style={{
          position:'absolute',
          zIndex:99,
          backgroundColor: '#00bbbb',
          borderRadius:30,
          left:'40%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg'}],
        }}/>
        <View style={{
          position:'absolute',
          zIndex:99,
          backgroundColor: '#00a7a7',
          borderRadius:30,
          left:'40.5%',
          top: '-10%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg'}],
        }}/>
        <View style={{
          position:'absolute',
          zIndex:99,
          backgroundColor: '#009494',
          borderRadius:30,
          left:'41%',
          top: '-20%',
          height: '7%',
          width: '100%',
          transform: [{ rotate: '-45deg'}],
        }}/>


        <Text style={{
          position:'absolute',
          zIndex:99,
          top: '35%',
          left: '5%',
          fontSize:30,
          fontWeight:'bold',
          color:'white'
        }}>
          Hello, Daniils!
        </Text>

        <Text style={{
          position:'absolute',
          zIndex:99,
          top: '42%',
          left: '5%',
          right:'30%',
          fontSize:15,
          color:'white'
        }}>
          Enjoy a Token collection game created by our powerfull designers.
        </Text>
      
        <View style={{
          position:'absolute',
          zIndex:99,
          left: '3%',
          top:'50%',
          backgroundColor: 'teal',
          height: '30%',
          width: '94%',
          borderRadius:15,
        }}/>
  
        <View style={{
          position:'absolute',
          zIndex:99,
          left: '3%',
          top:'70%',
          backgroundColor: 'teal',
          height: '30%',
          width: '94%',
          borderRadius: 10,
        }}/>
  
       <View style={{
        position:'absolute',
        zIndex:999,
        left: '5%',
        top:'52%',
        backgroundColor: '#00cece',
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
        <Progress.Bar progress={tokensCollected/totalTokens} width={null} height={40} color={'#a7ffff'} borderWidth={3} />
        </View>
        <Text style={{
          position:'absolute',
          zIndex:999,
          top:'65%',
          left: '5%',
          fontSize:15,
          fontWeight:'bold',
          color: 'teal',
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
        backgroundColor: 'white',
        height: '24%',
        width: '42%',
        borderRadius: 10,
      }}>
        <Ionicons
        name="school"
        size={60}
        color="#00a7a7"
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
          color:'#00a7a7'
        }}>
          Tutorial
        </Text>
      <View/>    
  
    </View>
    </View>
  );
};

export default HomeScreen;
