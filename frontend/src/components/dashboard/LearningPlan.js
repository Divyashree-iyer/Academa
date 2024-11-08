// LearningPlan.js
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Paper, IconButton, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSection from '../common/AccordionSection';

const LearningPlan = ({ plan }) => {
  const weekKeys = Object.keys(plan);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);

  const handlePrevWeek = () => {
    setCurrentWeekIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : weekKeys.length - 1));
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex((prevIndex) => (prevIndex < weekKeys.length - 1 ? prevIndex + 1 : 0));
  };

  const currentWeek = weekKeys[currentWeekIndex];
  const currentWeekData = plan[currentWeek];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" maxWidth="600px" mx="auto" p={3}>
      {/* Navigation Buttons */}
      <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
        <IconButton onClick={handlePrevWeek}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h5" align="center" style={{ flex: 1 }}>
          {currentWeek}
        </Typography>
        <IconButton onClick={handleNextWeek}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
        {Object.keys(currentWeekData).map((sectionTitle) => (
          <AccordionSection
            key={sectionTitle}
            title={sectionTitle}
            items={
              sectionTitle === "Resources"
                ? currentWeekData[sectionTitle].map((resource) => (
                  <a href={resource} target="_blank" rel="noopener noreferrer" style={{ color: '#3f51b5' }}>
                    {resource}
                  </a>
                ))
                : currentWeekData[sectionTitle]
            }
          />
        ))}
      </Paper>

    </Box>
  );
};

export default LearningPlan;
