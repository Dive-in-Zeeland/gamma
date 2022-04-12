/* 
  Parent for screen content, with a title
*/

import React from 'react';
import styled from 'styled-components/native';
import { ContentBox } from 'style/boxes/ContentBox';
import ColorBox from './ColorBox';
import ColorText from './ColorText';
import Sizer from './Sizer';

const Screen = styled.View`
  background-color: ${props => props.theme.colors.main};
  flex: 1;
  padding: ${p => p.theme.spacing.screenSpace};
`;

const Spaced = styled.View`
  flex: 1;
  justify-content: space-between;
`;

interface ITitle {
  title: string;
  subtitle?: string;
}

const Title: React.FC<ITitle> = ({ title, subtitle }) => (
  <ColorBox m="0 0 15px 10px" w="70%">
    <ColorText light bold size="22px" align="left">
      {title}
    </ColorText>
    {subtitle ? (
      <Sizer m="2px 0 0">
        <ColorText light bold size="16px" align="left">
          {subtitle}
        </ColorText>
      </Sizer>
    ) : (
      false
    )}
  </ColorBox>
);

interface IContent {
  nobox?: boolean;
  spaced?: boolean;
}

const Content: React.FC<IContent> = ({ nobox, spaced, children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  let content = <>{children}</>;

  content = spaced ? <Spaced>{content}</Spaced> : content;
  content = nobox ? content : <ContentBox>{content}</ContentBox>;

  return content;
};

const TitledScreen: React.FC<IContent & ITitle> = ({
  title,
  children,
  subtitle,
  nobox,
  spaced,
}) => {
  return (
    <Screen>
      <Title title={title} subtitle={subtitle} />
      <Content nobox={nobox} spaced={spaced}>
        {children}
      </Content>
    </Screen>
  );
};

export default TitledScreen;
