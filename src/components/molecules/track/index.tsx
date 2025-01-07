import React, { FC, MouseEventHandler } from 'react';
import { styled } from '@mui/material';

import Image from '../../atoms/image';
import Typography from '../../atoms/typography';
import theme from '../../../theme/theme';
import Icon from '../../atoms/icon';
import favoriteFilled from '../../../assets/images/favorite-filled.svg';
import favoriteOutlined from '../../../assets/images/favorite-outlined.svg';

type TrackTypes = {
  name: string;
  duration: string;
  album: string;
  image: string;
  trackNumber: number;
  isFavorite: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const commonDivStyles = `
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StyledDivParent = styled('div')(
    `${commonDivStyles};
    justify-content: space-evenly;
    background-color: ${theme.palette.primary[500]};
    padding: ${theme.spacing(3)} ${theme.spacing(0)}`
    
);

const StyledDiv = styled('div')(
    `${commonDivStyles};
    justify-content: 'space-between'`
);


const Track: FC<TrackTypes> = (props) => (
  <StyledDivParent>
    <StyledDiv>
      <Typography variant={'subtitle3'} color={theme.palette.text.secondary}>
        {props?.trackNumber}
      </Typography>
      <Image
        src={props?.image}
        style={{
            width: '32px',
            height: '32px',
            marginLeft: `${theme.spacing(6)}px`,
            marginRight: `${theme.spacing(3)}px`,
        }}
      />
      <Typography variant='subtitle3' color={theme.palette.text.secondary}>
        {props?.name}
      </Typography>
    </StyledDiv>
    <Typography variant='subtitle3' color={theme.palette.text.secondary}>
      {props?.album}
    </Typography>
    <Icon
      src={props?.isFavorite ? favoriteFilled : favoriteOutlined}
      style={{ width: '15px', height: '15px' }}
      onClick={props?.onClick}
    ></Icon>
    <Typography variant='subtitle3' color={theme.palette.text.secondary}>
      {props?.duration}
    </Typography>
  </StyledDivParent>
);

export default Track;
