import React from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';

const Tooltip = ({ children, title, ...props }) => {
  return (
    <MuiTooltip title={title} {...props}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;