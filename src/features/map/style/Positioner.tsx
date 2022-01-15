/* 
  Container that absolutery centers in its parent
*/

import Sizer from 'features/collector/styles/Sizer';
import styled from 'styled-components/native';

interface IPositioner {
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  row?: boolean;
}

const Positioner = styled(Sizer)<IPositioner>`
  position: absolute;
  top: ${p => p.top ?? 'auto'};
  bottom: ${p => p.bottom ?? 'auto'};
  left: ${p => p.left ?? 'auto'};
  right: ${p => p.right ?? 'auto'};
  z-index: 100;
  flex-direction: ${p => (p.row ? 'row' : 'column')};
`;

export default Positioner;
