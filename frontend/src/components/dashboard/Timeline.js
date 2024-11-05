import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

const Timeline = ({ events }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Timeline</Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar />
        </LocalizationProvider>
        <List>
          {events.map((event, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={event.title}
                secondary={`${event.date} - ${event.status}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Timeline;