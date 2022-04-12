/*
  Sizable container with color fill
*/

import styled from 'styled-components/native';
import Sizer, { ISizer } from './Sizer';

export interface IColorBox extends ISizer {
  color?: string;
  bw?: string;
  br?: string;
  elev?: number;
  bcolor?: string;
}

const ColorBox = styled(Sizer)<IColorBox>`
  overflow: hidden;
  background-color: ${props => props.color ?? props.theme.colors.main};
  border-radius: ${props => props.br ?? props.theme.spacing.br};
  border-width: ${props => props.bw ?? '0px'};
  border-color: ${props => props.bcolor ?? props.theme.colors.main};
  elevation: ${props => props.elev ?? 0};
`;

export default ColorBox;
