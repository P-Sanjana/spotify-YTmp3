import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import Icon from '../../atoms/icon';
import theme from '../../../theme/theme';
import repeatIcon from '../../../assets/images/repeat.svg';
import previousIcon from '../../../assets/images/previous.svg';
import nextIcon from '../../../assets/images/next.svg';
import shuffleIcon from '../../../assets/images/shuffle.svg';

const ButtonBox = styled(Box)(() => ({
    backgroundColor: theme.palette.primary["500"],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
}));

const genericIconStyles = {
    width: '32px',
    height: '32px',
};

const repeatIconStyles = {
    width: '24px',
    height: '24px',
};


type ControlButtonsProps = {
    playPauseIcon: string;
    onRepeatClick: React.MouseEventHandler<HTMLButtonElement>;
    onPreviousClick: React.MouseEventHandler<HTMLButtonElement>;
    onPlayPauseClick: React.MouseEventHandler<HTMLButtonElement>;
    onNextClick: React.MouseEventHandler<HTMLButtonElement>;
    onShuffleClick: React.MouseEventHandler<HTMLButtonElement>; 
} 

const ControlButtons: FC<ControlButtonsProps> = (props) => {
    const icons = [
        {
            icon: previousIcon,
            onClickFn: props?.onPreviousClick 
        },
        {
            icon: props?.playPauseIcon,
            onClickFn: props?.onPlayPauseClick 
        },
        {
            icon: nextIcon,
            onClickFn: props?.onNextClick 
        },
        {
            icon: shuffleIcon,
            onClickFn: props?.onShuffleClick
        },
    ];
    return (
        <ButtonBox>
            <Icon src={repeatIcon} style={repeatIconStyles} onClick={props?.onRepeatClick}/>
            {icons?.map((icon) => {
              return <Icon key={icon.icon} src={icon.icon} style={genericIconStyles} onClick={icon.onClickFn}/> 
            })}
        </ButtonBox>
    )
}

export default ControlButtons;