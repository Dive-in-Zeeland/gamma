import React from 'react';
import { TokenType } from 'store/tokens';
import CollectedToken from './CollectedToken';
import NotCollectedToken from './NotCollectedToken';

export interface TokenBoxProps {
  onPress?: () => void;
  token: TokenType;
}

const TokenBox: React.FC<TokenBoxProps> = ({ onPress, token }) => {
  return token.isCollected ? (
    <CollectedToken token={token} />
  ) : (
    <NotCollectedToken token={token} onPress={onPress} />
  );
};

export default TokenBox;
