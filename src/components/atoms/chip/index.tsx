import React, { FC, MouseEventHandler } from 'react';

import Chip from '@mui/material/Chip';
import theme from '../../../theme/theme';
import styled from '@emotion/styled';

type ChipTypes = {
  label: string;
  isSelected: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

const StyledChip: FC<ChipTypes> = styled(Chip)(({ isSelected }) => ({
  backgroundColor: isSelected
    ? theme.palette.text.primary
    : theme.palette.primary.main,
  color: isSelected ? theme.palette.primary.main : theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: isSelected
      ? theme.palette.text.primary
      : theme.palette.primary.main,
  },
}));

const ChipComponent: FC<ChipTypes> = (props) => {
  return (
    <StyledChip
      label={props?.label}
      onClick={props?.onClick}
      isSelected={props?.isSelected}
    />
  );
};

export default ChipComponent;
