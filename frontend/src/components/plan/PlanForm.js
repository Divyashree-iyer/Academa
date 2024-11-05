import React, { useState } from 'react';
import { Card, CardContent, CardActions, TextField, Select, MenuItem, FormControl, InputLabel, Button, Typography } from '@mui/material';

const PlanForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    goal: '',
    currentLevel: '',
    timeCommitment: '',
    preferredLearningStyle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Create Your Learning Plan
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="goal"
            label="Learning Goal"
            value={formData.goal}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Current Level</InputLabel>
            <Select
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleChange}
              required
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            name="timeCommitment"
            label="Time Commitment (hours per week)"
            type="number"
            value={formData.timeCommitment}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Preferred Learning Style</InputLabel>
            <Select
              name="preferredLearningStyle"
              value={formData.preferredLearningStyle}
              onChange={handleChange}
              required
            >
              <MenuItem value="visual">Visual</MenuItem>
              <MenuItem value="auditory">Auditory</MenuItem>
              <MenuItem value="reading">Reading/Writing</MenuItem>
              <MenuItem value="kinesthetic">Kinesthetic</MenuItem>
            </Select>
          </FormControl>
        </form>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Generate Plan
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlanForm;