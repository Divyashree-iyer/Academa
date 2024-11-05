import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const CurriculumDisplay = ({ curriculum }) => {
  if (!curriculum) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Your Personalized Curriculum
        </Typography>
        <Typography variant="h6" gutterBottom>Goal: {curriculum.goal}</Typography>
        <Typography variant="body1" gutterBottom>Estimated Duration: {curriculum.duration}</Typography>
        <Divider />
        <List>
          {curriculum.modules.map((module, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={module.title}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      Duration: {module.duration}
                    </Typography>
                    {" — "}{module.description}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CurriculumDisplay;