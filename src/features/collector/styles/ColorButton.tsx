/* 
  Just a button, sizable
*/

import React from 'react';
import { Pressable } from 'react-native';
import ColorBox from './ColorBox';
import ColorText from './ColorText';
import Sizer from './Sizer';

export interface IColorButton {
  onPress?: () => void;
  light?: boolean;
}

const darkStyle = {
  box: {
    p: '12px 16px',
    elev: 6,
  },
  text: {
    light: true,
    upper: true,
    bold: true,
    size: '16px',
  },
};

const lightStyle = {
  box: {
    ...darkStyle.box,
    color: 'white',
  },
  text: {
    ...darkStyle.text,
    light: false,
  },
};

const ColorButton: React.FC<IColorButton> = ({ onPress, children, light }) => {
  return (
    <Sizer m="4px 0">
      <Pressable onPress={onPress}>
        <ColorBox {...(light ? lightStyle.box : darkStyle.box)}>
          <ColorText {...(light ? lightStyle.text : darkStyle.text)}>
            {children}
          </ColorText>
        </ColorBox>
      </Pressable>
    </Sizer>
  );
};

export default ColorButton;
