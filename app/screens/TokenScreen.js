import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Platform} from 'react-native';

export default function TokenScreen({ navigation }) {
    return (
      <View style={styles.main}> 
        <View style={styles.home} >  
         
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:"teal",
    },
    home: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    helperContainer:{
      flex: 0.1,
      flexDirection: "row",
      borderRadius: 15,
      marginTop: 10,
      marginLeft:20,
      marginRight:20,
    },
    icon1:{
      flex:0.50,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    icon2:{
      flex:0.50,
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    location:{   
      flex: 0.8,
    },
    info:{   
        borderRadius: 15,
        flex: 0.1,
        margin: 20,
        marginTop: 10,
        backgroundColor: "teal"
    },
    container: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        height:420,
        borderWidth:2,
        borderColor:'teal',
        width:300,
        borderRadius: 15,
    },
});