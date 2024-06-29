import React, { ChangeEventHandler, FC } from 'react';
import Box from '@mui/material/Box/Box';
import { styled } from '@mui/material/styles';

import Typography from '../../atoms/typography';
import theme from '../../../theme/theme';
import SongBar from '../../atoms/songBar';
import '../../atoms/songBar/index.css';

type PlayerProgressBarProps = {
  value: number;
  duration: number;
  remainingDuration: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  songName: string;
  artistName: string;
};

const StyledBox = styled(Box)({
  marginTop: `${theme.spacing(4)}`,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
});

const StyledContainer = styled(Box)({
  backgroundColor: theme.palette.primary['500'],
  padding: `${theme.spacing(3)} ${theme.spacing(0)}`,
});

const songBarStyles = {
  marginBottom: `${theme.spacing(2)}`
}

const PlayerProgressBar: FC<PlayerProgressBarProps> = (props) => {
  return (
    <StyledContainer>
      <Typography variant='h3' color={theme.palette.text.secondary}>
        {props?.songName}
      </Typography>
      <Typography variant='body3' color={theme.palette.text.primary}>
        {props?.artistName}
      </Typography>
      <StyledBox>
        <SongBar
          value={props?.value}
          duration={props?.duration}
          onChange={props?.onChange}
          style={songBarStyles}
        />
        <Typography variant='subtitle3' color={theme.palette.text.primary}>
          {props?.remainingDuration}
        </Typography>
      </StyledBox>
    </StyledContainer>
  );
};

export default PlayerProgressBar;
