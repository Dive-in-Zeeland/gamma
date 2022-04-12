import styled from 'styled-components/native';

interface IColorText {
  size?: string;
  align?: string;
  bold?: boolean;
  light?: boolean;
  upper?: boolean;
}

const ColorText = styled.Text<IColorText>`
  /* size */
  font-size: ${p => p.size ?? '18px'};

  /* align */
  text-align: ${p => p.align ?? 'center'};

  /*  bold  */
  font-weight: ${p => (p.bold ? 700 : 400)};

  /* light */
  color: ${p => (p.light ? p.theme.colors.lightText : p.theme.colors.darkText)};

  /* upper */
  ${p => (p.upper ? 'text-transform: uppercase' : '')}
`;

export default ColorText;
