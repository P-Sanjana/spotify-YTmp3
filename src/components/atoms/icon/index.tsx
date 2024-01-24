import React, { CSSProperties, FC } from 'react';
import { IconButton } from '@mui/material';

type IconProps = {
  src: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Icon: FC<IconProps> = (props) => {
  return (
    <IconButton onClick={props?.onClick}>
      <img src={props?.src} style={props?.style} />
    </IconButton>
  );
};

export default Icon;
