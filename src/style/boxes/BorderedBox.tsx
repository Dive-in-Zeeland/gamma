import styled from 'styled-components/native';

const BorderedBox = styled.View`
  flex: 1;
  width: 100%;
  overflow: hidden;
  border-radius: ${props => props.theme.spacing.br};
  border: solid 5px ${props => props.theme.colors.main};
`;

export default BorderedBox;
