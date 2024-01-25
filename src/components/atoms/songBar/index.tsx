import React, { CSSProperties, ChangeEventHandler, FC } from 'react';

import './index.css';

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
      style={props?.style}
      onChange={props?.onChange}
    />
  );
};
export default SongBar;
