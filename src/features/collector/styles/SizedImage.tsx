import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

const ImageContainer = styled.View<{ width: string; ratio: number }>`
  width: 60%;
  height: undefined;
  aspect-ratio: 1;
`;

export interface ISizedImage {
  source: ImageSourcePropType;
  width?: string;
  height?: string;
}

const SizedImage: React.FC<ISizedImage> = ({
  source,
  width = '100%',
  height = '100%',
}) => {
  const nopx = (measure: string) => parseInt(measure, 10);
  const ratio = nopx(width) / nopx(height);

  return (
    <ImageContainer ratio={ratio} width={width}>
      <Image
        source={source}
        style={{
          flex: 1,
          height: undefined,
          resizeMode: 'contain',
          width: undefined,
        }}
      />
    </ImageContainer>
  );
};

export default SizedImage;
