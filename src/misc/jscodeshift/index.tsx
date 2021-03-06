import { DefaultTheme } from 'styled-components/native';
import { colors } from './colors';
import { spacing } from './spacing';

// see: https://nyxo.app/tips-for-using-typescript-with-styled-components
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
  }
}

const theme: DefaultTheme = {
  colors,
  spacing,
};

export default theme;
