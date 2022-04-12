import React from 'react';
import ColorText from '../ColorText';
import Sizer from '../Sizer';

const CenterText: React.FC<{ noflex?: boolean }> = ({ children, noflex }) => {
  return (
    <Sizer center flex={noflex ? undefined : 1} m="0 5px">
      <ColorText bold>{children}</ColorText>
    </Sizer>
  );
};

export default CenterText;
