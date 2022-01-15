import React from 'react';
import styled from 'styled-components/native';

const Line = styled.View<{
  color: string;
  top: string;
  left: string;
}>`
  position: absolute;
  z-index: 9999;
  border-radius: 30px;
  height: 7%;
  width: 100%;
  transform: rotate(-45deg);
  background-color: ${p => p.color};
`;

const LinesContainer = styled.View`
  position: absolute;
  z-index: 10;
  height: 100%;
  width: 100%;
`;

const LineGradient = () => {
  return (
    <LinesContainer pointerEvents="none">
      <Line color="#3F5EAD" left="70%" top="0%" />
      <Line color="#617BCE" left="55%" top="0%" />
      <Line color="#8399EF" left="40%" top="0%" />
      <Line color="#A4B8FF" left="42%" top="-10%" />
      <Line color="#C6D9FF" left="44%" top="-20%" />
    </LinesContainer>
  );
};
export default LineGradient;
