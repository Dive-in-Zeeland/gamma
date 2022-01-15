import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TokenType } from 'store/tokens';
import Scan from '../screens/Scan';
import Question from '../screens/Question';
import Theory from '../screens/Theory';
import Invalid from '../screens/Invalid';
import Wrong from '../screens/Wrong';
import Correct from '../screens/Correct';

export type CollectorNavigationParams = {
  Scan: undefined;
  Theory: {
    tokenValt: TokenType;
  };
  Question: {
    tokenValt: TokenType;
  };
  Invalid: undefined;
  Wrong: undefined;
  Correct: {
    tokenValt: TokenType;
  };
};

const Stack = createNativeStackNavigator<CollectorNavigationParams>();

function CollectorNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'none',
      }}
    >
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Theory" component={Theory} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Invalid" component={Invalid} />
      <Stack.Screen name="Wrong" component={Wrong} />
      <Stack.Screen name="Correct" component={Correct} />
    </Stack.Navigator>
  );
}

export default CollectorNavigation;
