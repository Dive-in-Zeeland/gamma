import { View } from 'react-native';
import styled from 'styled-components/native';

const BorderCard = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-width: 3px;
  border-color: teal;
  border-radius: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default BorderCard;
