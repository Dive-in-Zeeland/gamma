/* 
  Just a button, sizable
*/

import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ColorBox, { IColorBox } from './ColorBox';
import Sizer from './Sizer';

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export interface IColorButton extends IColorBox {
  onPress?: () => void;
}

const ColorButton: React.FC<IColorButton> = props => {
  // Own props
  const { onPress, children } = props;

  // ColorBox props
  const { w, h, wh, flex, m, p = '8px 16px', elev = 6, color } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <ColorBox
        w={w}
        h={h}
        wh={wh}
        flex={flex}
        m={m}
        p={p}
        elev={elev}
        color={color}
      >
        <Text>{children}</Text>
      </ColorBox>
    </TouchableOpacity>
  );
};

export default ColorButton;
