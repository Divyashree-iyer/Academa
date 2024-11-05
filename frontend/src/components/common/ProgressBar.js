import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

const ProgressBar = ({ value, label }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value,
        )}%`}</Typography>
      </Box>
      {label && (
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{label}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProgressBar;