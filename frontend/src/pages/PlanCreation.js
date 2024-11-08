import React from 'react';
import { Container, Typography } from '@mui/material';
import ChatInterface from '../components/chatbot/ChatInterface';


const PlanCreation = () => {


  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Study Plan Generator
      </Typography>
      <Typography variant="body1" paragraph>        
        To create your personalized study plan, simply describe your goal,then share your current skill level in relevant areas to get a tailored plan. Lastly, let the planner know your weekly time availability, and it will generate a roadmap that fits your schedule and learning pace.
      </Typography>
      <ChatInterface />
    </Container>
  );
};

export default PlanCreation;

