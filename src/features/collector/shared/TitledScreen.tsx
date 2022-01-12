/* 
  Parent for screen content, with a title
*/

import React from 'react';
import BasicScreen from 'style/layout/BasicScreen';
import styled from 'styled-components/native';
import ColorBox from './ColorBox';

// White bold text
const TitleText = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

// Marging and padding to the text
const Title: React.FC<ITitle> = ({ titleText }) => (
  <ColorBox p="16px 18px" m="0 0 12px">
    <TitleText>{titleText}</TitleText>
  </ColorBox>
);

// Please pass title text
interface ITitle {
  titleText: string;
}

const TitledScreen: React.FC<ITitle> = ({ titleText, children }) => {
  return (
    <BasicScreen>
      <Title titleText={titleText}>
        <TitleText>{titleText}</TitleText>
      </Title>
      {children}
    </BasicScreen>
  );
};

export default TitledScreen;
