import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const MessageList = ({ messages }) => {
  return (
    <Paper style={{ maxHeight: 400, overflow: 'auto', marginBottom: 16 }}>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText
              primary={
                <Typography
                  component="span"
                  variant="body1"
                  color={message.sender === 'user' ? 'primary' : 'secondary'}
                >
                  {message.sender === 'user' ? 'You' : 'Academa Bot'}
                </Typography>
              }
              secondary={message.text}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MessageList;