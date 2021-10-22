import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, {Marker, Callout} from 'react-native-maps';

import QrModalScreen from './app/screens/qrModal'

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}> 
      <View style={styles.home} >  
      <View style={styles.helperContainer}>
        <View style={styles.icon1}>
          <Ionicons name='ios-barcode' size={35} color='teal' onPress={() => {
            navigation.navigate("MyModal");
          }}/> 
        </View>
          <View style={styles.icon2}>
            <Ionicons name='ios-alert' size={35} color='teal' onPress={() => {
            navigation.navigate("SecondMyModal");
          }}/>
          </View>
      </View>
      <View style={styles.location}> 
                <View style={styles.container}>
                    <MapView style={styles.map} initialRegion={{
                        latitude: 51.495142,
                        longitude: 3.609632,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                    }}> 
                    <Marker coordinate={{
                        latitude: 51.497833,
                        longitude: 3.608876,
                    }}>
                        <Callout onPress={() => {
                        navigation.navigate("MyModal");
                        }}>
                            <Text>STREET</Text>
                        </Callout>
                    </Marker>

                    <Marker coordinate={{
                        latitude: 51.492899,
                        longitude: 3.607978,
                    }}>
                        <Callout onPress={() => {
                        navigation.navigate("MyModal");
                        }}>
                            <Text>APV</Text>
                        </Callout>
                    </Marker>

                    <Marker coordinate={{
                        latitude: 51.495142,
                        longitude: 3.609632,
                    }}>
                        <Callout onPress={() => {
                        navigation.navigate("MyModal");
                        }}>
                            <Text>HZ</Text>
                        </Callout>
                    </Marker>

                    <Marker coordinate={{
                        latitude: 51.496209,
                        longitude: 3.608172,
                    }}>
                        <Callout onPress={() => {
                        navigation.navigate("MyModal");
                        }}>
                            <Text>AH</Text>
                        </Callout>
                    </Marker>

                    </MapView>
                </View>
            </View>  
      {/* <Button
        title="Open PopUp"
        onPress={() => {
        navigation.navigate("MyModal");
        }}
        />
      <Button
        title="Open PopUp 2"
        onPress={() => {
        navigation.navigate("SecondMyModal");
        }}
      /> */}
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



function ModalScreen(route) {
  return (
    <View style={styles.main}> 
    <View style={styles.home} >  
    <View style={{ margin: 60 }}>
    <Text style={{ fontSize: 24 }}>Modal 1</Text>
    <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
        }}
    />
    </View>
    </View>
    </View>
  );
}

function SecondModalScreen(route) {
  return (
    <View style={styles.main}> 
    <View style={styles.home} >  
    <View style={{ margin: 60 }}>
    <Text style={{ fontSize: 24 }}>Modal 2</Text>
    <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
        }}
    />
    </View>
    </View>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home Screen",
        }}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <RootStack.Navigator 
    headerMode="none"
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    >
      <RootStack.Screen name="MainStack" component={MainStackScreen} />
      <RootStack.Screen
        name="MyModal"
        component={QrModalScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
      <RootStack.Screen
        name="SecondMyModal"
        component={SecondModalScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
    </RootStack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.main}> 
    <View style={styles.home} >  
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>This is a Settings Tab</Text>
    </View>
    </View>
  </View>
  );
}

function TabNavigation() {
  return (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'grey',
          style: {
            marginBottom:10,
            marginLeft:10,
            marginRight:10,
            padding: 1,
            borderRadius: 15,
            elavation: 0,
          }
      }}
      >
      <Tabs.Screen name="Home" component={RootStackScreen} />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tabs.Navigator>
  );
}

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'teal'}}>
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    </SafeAreaView>
  );
}
