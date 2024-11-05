import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const CurrentPlanSummary = ({ plan }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Current Plan</Typography>
        <Typography variant="body1">Goal: {plan.goal}</Typography>
        <Typography variant="body2" color="text.secondary">
          Progress: {plan.progress}% complete
        </Typography>
        <List dense>
          {plan.upcomingMilestones.map((milestone, index) => (
            <ListItem key={index}>
              <ListItemText 
                primary={milestone.title}
                secondary={`Due: ${milestone.dueDate}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CurrentPlanSummary;