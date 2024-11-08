import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);


 
  const handleSendMessage = async (text) => {
    const newMessage = { text, sender: 'user' };
    setMessages([...messages, newMessage]);
    fetch('http://localhost:5000/conversation/chat', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: text }) 
    })
    .then(response => response.json()) 
    .then(data => {
      const botMessage = { text: data.response, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
  

  return (
    <Card>
      <CardContent>
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </CardContent>
    </Card>
  );
};

export default ChatInterface;