import React, { useState } from 'react';
import Navigation from 'nav/Navigation';
import { SafeArea } from 'style/layout/SafeArea';
import { ThemeProvider } from 'styled-components/native';
import AppTheme from 'constants/theme';

export default function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <SafeArea>
        <Navigation />
      </SafeArea>
    </ThemeProvider>
  );
}
