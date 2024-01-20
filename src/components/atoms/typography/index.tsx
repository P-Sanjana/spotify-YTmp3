import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';
import { SxProps, Theme } from '@mui/system';

type TypographyProps = {
  variant: Variant | 'body3' | 'subtitle3';
  children: string;
  color: string;
  sx?: SxProps<Theme>;
};

const Text: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant={props?.variant as Variant}
      color={props?.color}
      sx={props?.sx}
    >
      {props?.children}
    </Typography>
  );
};

export default Text;
