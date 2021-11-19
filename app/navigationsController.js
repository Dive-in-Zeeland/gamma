import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

//Importing Screens to the main navigations controller
import HomeScreen from './screens/HomeScreen'
import questionsScreen from './screens/questionScreen'
import TokenScreen from './screens/TokenScreen'
import HelpScreen from './screens/HelpModal'
import giftModal from './screens/giftModal'
import SettingScreen from './screens/SettingScreen'

const Stack = createStackNavigator();


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

/**
 * 
 * @returns Home screen main page and questions page
 */
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
        name="questions"
        component={questionsScreen}
        options={{
          title: "Questions",
        }}
      />
    </MainStack.Navigator>
  );
}

/**
 * 
 * @returns Home screen stack 
 */
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
      <RootStack.Screen
        name="giftScreen"
        component={giftModal}
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

/**
 * Main navigator of the application
 * 
 * @returns Tab Navigations
 */
function TabNavigation() {
  return (
    <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 30;

            if (route.name === 'Map') {
              iconName = 'map';
            } else if (route.name === 'Token List') {
              iconName = 'grid';
            } else if (route.name === 'Camera') {
              iconName = 'camera';
            } else if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }


            // returns icon to the tab view
            return <Ionicons name={iconName} size={size} color={color} style={{marginTop:10,}}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'teal',
          inactiveTintColor: 'grey',
          style: {
            flex:0.10,
            margin:10,
            borderRadius: 15,
          }
      }}
      >
      <Tabs.Screen
        name="Token List"
        options={{ tabBarLabel: '' }}
        component={TokenScreen}
      />
      <Tabs.Screen name="Map" options={{ tabBarLabel: '' }} component={RootStackScreen}/>
      <Tabs.Screen
        name="Home"fffffffffff
        options={{ tabBarLabel: '' }}
        component={HelpScreen}
      />
      <Tabs.Screen
        name="Camera"
        options={{ tabBarLabel: '' }}
        component={questionsScreen}
      />
      <Tabs.Screen
        name="Settings"
        options={{ tabBarLabel: '' }}
        component={SettingScreen}
      />
    </Tabs.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

export default function NavigationController() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'teal'}}>
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    </SafeAreaView>
  );
}
