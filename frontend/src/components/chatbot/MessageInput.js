import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex">
        <TextField
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginLeft: 8 }}>
          Send
        </Button>
      </Box>
    </form>
  );
};

export default MessageInput;