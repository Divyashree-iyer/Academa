// AccordionSection.js
import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionSection = ({ title, items }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}
        sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}
      >
        <Typography
          variant="h6"
          style={{
            width: '100%',
            transition: 'color 0.3s',
            '&:hover': { color: '#3f51b5' }
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSection;
