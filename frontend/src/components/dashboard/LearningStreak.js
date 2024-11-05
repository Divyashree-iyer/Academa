import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const LearningStreak = ({ currentStreak, longestStreak }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Learning Streak</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">Current Streak: {currentStreak} days</Typography>
          <LinearProgress variant="determinate" value={(currentStreak / 30) * 100} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Longest Streak: {longestStreak} days</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LearningStreak;