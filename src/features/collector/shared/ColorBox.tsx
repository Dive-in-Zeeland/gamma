/*
  Sizable container with color fill
*/

import styled from 'styled-components/native';
import Sizer, { ISizer } from './Sizer';

export interface IColorBox extends ISizer {
  br?: string;
  color?: string;
  elev?: number;
}

const ColorBox = styled(Sizer)<IColorBox>`
  background-color: ${props => props.color ?? props.theme.colors.main};
  border-radius: ${props => props.br ?? props.theme.spacing.br};
  elevation: ${props => props.elev ?? 0};
`;

export default ColorBox;
