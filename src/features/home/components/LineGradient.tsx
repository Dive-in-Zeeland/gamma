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
      <Line color="#5372c0" left="69.9%" top="0%" />
      <Line color="#7089cb" left="54.9%" top="0%" />
      <Line color="#9baddb" left="40%" top="0%" />
      <Line color="#c6d0ea" left="40.1%" top="-10%" />
      <Line color="#e3e8f5" left="40.3%" top="-20%" />
    </LinesContainer>
  );
};
export default LineGradient;
