import React from 'react';
import { Grid, Container } from '@mui/material';
import CurrentPlanSummary from '../components/dashboard/CurrentPlanSummary';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import Timeline from '../components/dashboard/Timeline';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
// import RecommendationButton from '../components/dashboard/RecommendationButton';
import LearningStreak from '../components/dashboard/LearningStreak';
import QuickQuiz from '../components/dashboard/QuickQuiz';

// You would typically fetch this data from an API or state management system
const mockData = {
  currentPlan: {
    goal: "Master React and Node.js",
    progress: 65,
    upcomingMilestones: [
      { title: "Complete React Hooks", dueDate: "2023-11-15" },
      { title: "Build a Full-Stack App", dueDate: "2023-12-01" },
    ],
  },
  progressData: {
    overallProgress: 65,
    topics: [
      { name: "React Fundamentals", progress: 90 },
      { name: "Node.js Basics", progress: 75 },
      { name: "Database Design", progress: 30 },
    ],
  },
  timelineEvents: [
    { title: "React Basics Completed", date: "2023-10-01", status: "Completed" },
    { title: "Node.js Sprint", date: "2023-11-20", status: "Upcoming" },
  ],
  badges: [
    { name: "React Rookie", icon: "path_to_icon", description: "Completed React basics" },
    { name: "Node Novice", icon: "path_to_icon", description: "Finished Node.js introduction" },
  ],
  recommendations: [
    { title: "Advanced React Patterns", type: "Course" },
    { title: "Building RESTful APIs with Node.js", type: "Tutorial" },
  ],
  learningStreak: {
    currentStreak: 7,
    longestStreak: 15,
  },
  dailyQuiz: {
    question: "What is the purpose of useEffect in React?",
    options: [
      "To create side effects in functional components",
      "To define component state",
      "To render JSX",
      "To create class components",
    ],
    correctAnswer: "To create side effects in functional components",
  },
};

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CurrentPlanSummary plan={mockData.currentPlan} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProgressTracker 
            progress={mockData.progressData.overallProgress} 
            topics={mockData.progressData.topics} 
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Timeline events={mockData.timelineEvents} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LearningStreak 
            currentStreak={mockData.learningStreak.currentStreak}
            longestStreak={mockData.learningStreak.longestStreak}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <BadgeDisplay badges={mockData.badges} />
        </Grid>
        <Grid item xs={12} md={6}>
          <QuickQuiz 
            question={mockData.dailyQuiz.question}
            options={mockData.dailyQuiz.options}
            correctAnswer={mockData.dailyQuiz.correctAnswer}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <RecommendationButton recommendations={mockData.recommendations} />
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Dashboard;