import styled from 'styled-components/native';

const BorderCard = styled.View`
  flex: 1;
  border-width: 5px;
  border-color: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.spacing.br};
  justify-content: space-around;
`;

export default BorderCard;
