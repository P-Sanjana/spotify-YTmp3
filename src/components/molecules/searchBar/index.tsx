import React, { ChangeEventHandler, FC } from 'react';
import { Box, InputBase, styled } from '@mui/material';

import { searchPlaceholder } from '../../../utils/constants';
import { Search } from '@mui/icons-material';
import theme from '../../../theme/theme';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: `${theme.palette.primary['200']}`,
  height: '48px',
  border: `1px solid ${theme.palette.primary['300']}`,
  borderRadius: '10px',
  padding: `${theme.spacing(0)} ${theme.spacing(2)}`,
});

const StyledInputBase = styled(InputBase)({
  backgroundColor: `${theme.palette.primary['200']}`,
  width: '100%',
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
});

const StyledSearch = styled(Search)({
  width: '24px',
  height: '24px',
});

type SearchBarProps = {
  searchText: string;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <StyledBox>
      <StyledInputBase
        value={props?.searchText}
        onChange={props?.onChange}
        placeholder={searchPlaceholder}
      />
      <StyledSearch />
    </StyledBox>
  );
};
export default SearchBar;
