import React, { CSSProperties, ChangeEventHandler, FC } from 'react';

import './index.css';
import theme from '../../../theme/theme';

type SongBarTypes = {
  value: number;
  duration: number;
  style?: CSSProperties;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const SongBar: FC<SongBarTypes> = (props) => {
  return (
    <input
      type='range'
      value={props?.value}
      defaultValue={0}
      min={0}
      max={props?.duration}
      step={1}
      style={{...props?.style, background: `linear-gradient(to right, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} ${props?.value/props?.duration*100}%, ${theme.palette.text.primary} ${props?.value/props?.duration*100}%, ${theme.palette.text.primary} 100%)`}}
      onChange={props?.onChange}
    />
  );
};
export default SongBar;
