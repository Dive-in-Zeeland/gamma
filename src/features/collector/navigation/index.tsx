import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TokenType } from 'store/tokens';
import Scan from '../scan';
import Question from '../question';
import Result from '../result';
import Theory from '../theory';
import Invalid from '../invalid';

export type CollectorNavigationParams = {
  Scan: undefined;
  Theory: {
    token: TokenType;
    collect: () => void;
  };
  Question: undefined;
  Result: undefined;
  Invalid: undefined;
};

const Stack = createNativeStackNavigator<CollectorNavigationParams>();

function CollectorNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Theory" component={Theory} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Invalid" component={Invalid} />
    </Stack.Navigator>
  );
}

export default CollectorNavigation;
