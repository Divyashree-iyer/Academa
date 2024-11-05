import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import PlanForm from '../components/plan/PlanForm';
import CurriculumDisplay from '../components/plan/CurriculumDisplay';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const PlanCreation = () => {
  const [curriculum, setCurriculum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePlanSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      // This is where you would normally make an API call to generate the curriculum
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulated API response
      const generatedCurriculum = {
        goal: formData.goal,
        duration: '12 weeks',
        modules: [
          { title: 'Module 1: Foundations', duration: '2 weeks', description: 'Basic concepts and tools' },
          { title: 'Module 2: Core Skills', duration: '4 weeks', description: 'Building essential skills' },
          { title: 'Module 3: Advanced Topics', duration: '4 weeks', description: 'Diving deeper into complex areas' },
          { title: 'Module 4: Project Work', duration: '2 weeks', description: 'Applying skills to a real-world project' },
        ]
      };
      
      setCurriculum(generatedCurriculum);
    } catch (err) {
      setError('An error occurred while generating your curriculum. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PlanForm onSubmit={handlePlanSubmit} />
        </Grid>
        <Grid item xs={12} md={6}>
          {loading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {curriculum && <CurriculumDisplay curriculum={curriculum} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlanCreation;