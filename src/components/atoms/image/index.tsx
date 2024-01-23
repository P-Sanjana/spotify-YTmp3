import React, { CSSProperties, FC } from 'react';

type ImageProps = {
  src: string;
  style?: CSSProperties;
};

const Image: FC<ImageProps> = (props) => {
  return <img src={props?.src} style={props?.style} />;
};

export default Image;
