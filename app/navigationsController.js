import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { TransitionPresets, createDrawerNavigator, createStackNavigator  } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

//Importing Screens to the main navigations controller
import MapHelper from "./screens/helpScreens/MapHelper";
import QrHelper from "./screens/helpScreens/QrHelper";
import HomeScreen from './screens/HomeScreen';
import questionsScreen from './screens/questionScreen';
import TokenScreen from './screens/TokenScreen';
import HelpScreen from './screens/HelpModal';
import SettingScreen from './screens/SettingScreen';

const Stack = createStackNavigator();


const SubStackMap = createStackNavigator();
const MapStack = createStackNavigator();
const SubStackQr = createStackNavigator();
const QrStack = createStackNavigator();


/**
 * 
 * @returns Map Screen 
 */
function SubMapStackScreen() {
  return (
    <SubStackMap.Navigator headerMode="none">
      <SubStackMap.Screen
        name="MapScreen"
        component={HomeScreen}
      />
    </SubStackMap.Navigator>
  );
}

/**
 * 
 * @returns QR Screen
 */
 function SubQrStackScreen() {
  return (
    <SubStackQr.Navigator headerMode="none">
      <SubStackQr.Screen
        name="QrScreen"
        component={questionsScreen}
      />
    </SubStackQr.Navigator>
  );
}

/**
 * 
 * @returns Home screen stack 
 */
function MapStackScreen() {
  return (
    <MapStack.Navigator 
    headerMode="none"
      mode="modal"
      
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    >
    <MapStack.Screen name="SubMapStack" component={SubMapStackScreen} />
    <MapStack.Screen
        name="MapHelper"
        component={MapHelper}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
    />
    </MapStack.Navigator>
  );
}

/**
 * 
 * @returns QR screen stack 
 */
 function QrStackScreen() {
  return (
    <QrStack.Navigator 
    headerMode="none"
      mode="modal"
      
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          backgroundColor: "tomato",
        },
      }}
    >
    <QrStack.Screen
        name="QrSubStack"
        component={SubQrStackScreen}
    />
     <QrStack.Screen
        name="QrHelper"
        component={QrHelper}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
    />
    </QrStack.Navigator>
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
              iconName = 'aperture';
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
      <Tabs.Screen name="Map" options={{ tabBarLabel: '' }} component={MapStackScreen}/>
      <Tabs.Screen
        name="Home"
        options={{ tabBarLabel: '' }}
        component={HelpScreen}
      />
      <Tabs.Screen name="Camera" options={{ tabBarLabel: '' }} component={QrStackScreen}/>
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
