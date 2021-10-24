import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import { TransitionPresets } from '@react-navigation/stack';

//Importing Screens to the main App file
import HomeScreen from './app/screens/HomeScreen'
import ahScreen from './app/screens/questionsScreen/ahScreen'
import apvScreen from './app/screens/questionsScreen/apvScreen'
import hzScreen from './app/screens/questionsScreen/hzScreen'
import streetScreen from './app/screens/questionsScreen/streetScreen'
import TokenScreen from './app/screens/TokenScreen'
import HelpScreen from './app/screens/HelpModal'

const Stack = createStackNavigator();


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
      <MainStack.Screen
        name="apvScreen"
        component={apvScreen}
        options={{
          title: "APV Question",
        }}
      />
      <MainStack.Screen
        name="streetScreen"
        component={streetScreen}
        options={{
          title: "STREET Question",
        }}
      />
      <MainStack.Screen
        name="hzScreen"
        component={hzScreen}
        options={{
          title: "HZ Question",
        }}
      />
      <MainStack.Screen
        name="ahScreen"
        component={ahScreen}
        options={{
          title: "AH Question",
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
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    >
      <RootStack.Screen name="MainStack" component={MainStackScreen} />
      <RootStack.Screen
        name="HelpScreen"
        component={HelpScreen}
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

function TabNavigation() {
  return (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Token List') {
              iconName = focused ? 'ios-list' : 'ios-list';
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
        name="Token List"
        component={TokenScreen}
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
