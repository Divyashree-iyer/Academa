import React from 'react';
import { Container, Typography } from '@mui/material';
import ChatInterface from '../components/chatbot/ChatInterface';

const Chatbot = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Academa Chatbot
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Academa Chatbot! Ask any questions about your STEM curriculum, learning progress, or get help with specific topics.
      </Typography>
      <ChatInterface />
    </Container>
  );
};

export default Chatbot;