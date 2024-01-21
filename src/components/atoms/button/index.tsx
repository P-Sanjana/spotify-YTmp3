import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';
import { styled } from '@mui/material/styles';

import theme from '../../../theme/theme';

type ButtonProps = {
  title: string;
  color: string;
  variant: 'contained' | 'outlined';
  sx?: SxProps<Theme>;
  onClick: () => void;
};

const StyledButton = styled(Button)({
  borderWidth: '1px',
  borderRadius: '10px',
  padding: `${theme.spacing(0)} ${theme.spacing(3)}`,
  textTransform: 'none',
});

const ButtonAtom: FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      variant={props?.variant}
      onClick={props?.onClick}
      sx={props?.sx}
    >
      {props?.title}
    </StyledButton>
  );
};

export default ButtonAtom;
