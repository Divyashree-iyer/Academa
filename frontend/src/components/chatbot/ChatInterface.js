import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { text, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: "I'm here to help! What would you like to know about your STEM curriculum?", sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Chat with Academa Bot
        </Typography>
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </CardContent>
    </Card>
  );
};

export default ChatInterface;