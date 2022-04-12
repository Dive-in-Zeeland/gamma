import React from 'react';
import Navigation from 'nav/Navigation';
import { ThemeProvider } from 'styled-components/native';
import theme from 'constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.main} />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.main,
        }}
      >
        <Navigation />
      </SafeAreaView>
    </ThemeProvider>
  );
}
