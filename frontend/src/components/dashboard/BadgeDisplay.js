import React from 'react';
import { Card, CardContent, Typography, Tooltip, Box } from '@mui/material';

const BadgeDisplay = ({ badges }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Your Badges</Typography>
        <Box display="flex" flexWrap="wrap" gap={2} mt={2}>
          {badges.map((badge, index) => (
            <Box key={index}>
              <Tooltip title={badge.description}>
                <img src={badge.icon} alt={badge.name} style={{ width: 50, height: 50 }} />
              </Tooltip>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BadgeDisplay;
