/*
  Sizable container with colored border
  BUG: Small 1-pixel-width white lines around Camera, if br > 0
*/

import styled from 'styled-components/native';

interface IBorderBox {
  bw?: string;
  br?: string;
  color?: string;
  bs?: string;
}

const BorderedBox = styled.View<IBorderBox>`
  flex: 1;
  overflow: hidden;
  border-radius: ${props => props.br ?? props.theme.spacing.br};
  border-width: ${props => props.bw ?? '5px'};
  border-style: ${props => props.bs ?? 'solid'};
  border-color: ${props => props.color ?? props.theme.colors.main};
`;

export default BorderedBox;
