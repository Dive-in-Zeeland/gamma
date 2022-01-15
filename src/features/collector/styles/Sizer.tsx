/* 
  Container to define size (widht, height, flex) and spacing (margin, padding)
*/

import styled from 'styled-components/native';

export interface ISizer {
  w?: string;
  h?: string;
  wh?: string;
  flex?: number | string;
  m?: string;
  p?: string;
  center?: boolean;
  row?: boolean;
  aspect?: number;
}

const Sizer = styled.View<ISizer>`
  width: ${props => props.w ?? props.wh ?? 'auto'};
  height: ${props => props.h ?? props.wh ?? 'auto'};
  ${props => (props.flex ? `flex: ${props.flex}` : '')};
  ${props => (props.m ? `margin: ${props.m}` : '')};
  ${props => (props.p ? `padding: ${props.p}` : '')};
  ${props =>
    props.center ? 'align-items: center; justify-content: center;' : ''};
  flex-direction: ${p => (p.row ? 'row' : 'column')};
  ${p => (p.aspect ? `aspect-ratio: ${p.aspect}` : '')}
`;

export default Sizer;
