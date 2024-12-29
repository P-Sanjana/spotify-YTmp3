import React, { FC } from 'react';

import Typography from '../../atoms/typography';
import { searchQueryHeading, searchResults } from '../../../utils/constants';
import theme from '../../../theme/theme';

type SearchHeadingTypes = {
  searchQuery: string;
};

const SearchHeader: FC<SearchHeadingTypes> = (props) => {
  return (
    <>
      <Typography
        variant='subtitle2'
        color={theme.palette.text.primary}
        sx={{ paddingBottom: theme.spacing(3) }}
      >{`${searchQueryHeading} ${props?.searchQuery}`}</Typography>
      <Typography variant='body1' color={theme.palette.text.primary}>
        {searchResults}
      </Typography>
    </>
  );
};

export default SearchHeader;
