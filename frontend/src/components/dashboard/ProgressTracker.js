import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const ProgressTracker = ({ progress, topics }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Overall Progress</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Box>
        {topics.map((topic, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography variant="body2">{topic.name}</Typography>
            <LinearProgress variant="determinate" value={topic.progress} />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;