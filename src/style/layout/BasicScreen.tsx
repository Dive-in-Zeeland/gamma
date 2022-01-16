import React from 'react';
import { ContentBox } from 'style/boxes/ContentBox';
import styled from 'styled-components/native';

const Teal = styled.View`
  background-color: ${props => props.theme.colors.main};
  flex: 1;
`;

const BasicScreen: React.FC<{}> = ({ children }) => (
  <Teal>
    <ContentBox>{children}</ContentBox>
  </Teal>
);

export default BasicScreen;
