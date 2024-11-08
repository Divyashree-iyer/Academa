import React from 'react';
import { Grid, Container } from '@mui/material';
import LearningPlan from '../components/dashboard/LearningPlan';
import ProgressTracker from '../components/dashboard/ProgressTracker';
import Timeline from '../components/dashboard/Timeline';
import BadgeDisplay from '../components/dashboard/BadgeDisplay';
// import RecommendationButton from '../components/dashboard/RecommendationButton';
import LearningStreak from '../components/dashboard/LearningStreak';
import QuickQuiz from '../components/dashboard/QuickQuiz';

// You would typically fetch this data from an API or state management system
const mockData = {
  learningPlan: {
    "Week 1": {
      "Objectives": [
        "Understand the core concepts of machine learning.",
        "Gain familiarity with key algorithms and their applications.",
        "Develop a strong foundation in Python for data science."
      ],
      "Topics": [
        "Introduction to Machine Learning",
        "Supervised Learning (Regression, Classification)",
        "Unsupervised Learning (Clustering, Dimensionality Reduction)",
        "Data Preprocessing and Feature Engineering",
        "Python Libraries (NumPy, Pandas, Matplotlib, Scikit-learn)"
      ],
      "Tasks": [
        "Complete interactive tutorials on machine learning fundamentals (e.g., Kaggle, Coursera).",
        "Build a simple regression model using Scikit-learn.",
        "Visualize data and model results using Matplotlib.",
        "Create a small data cleaning and preprocessing project."
      ],
      "Resources": [
        "https://developers.google.com/machine-learning/crash-course",
        "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032937",
        "https://www.datacamp.com/courses/machine-learning-with-python"
      ]
    },
    "Week 2": {
      "Objectives": [
        "Week 2 things",
        "Gain familiarity with key algorithms and their applications.",
        "Develop a strong foundation in Python for data science."
      ],
      "Topics": [
        "Introduction to Machine Learning",
        "Supervised Learning (Regression, Classification)",
        "Unsupervised Learning (Clustering, Dimensionality Reduction)",
        "Data Preprocessing and Feature Engineering",
        "Python Libraries (NumPy, Pandas, Matplotlib, Scikit-learn)"
      ],
      "Tasks": [
        "Complete interactive tutorials on machine learning fundamentals (e.g., Kaggle, Coursera).",
        "Build a simple regression model using Scikit-learn.",
        "Visualize data and model results using Matplotlib.",
        "Create a small data cleaning and preprocessing project."
      ],
      "Resources": [
        "https://developers.google.com/machine-learning/crash-course",
        "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032937",
        "https://www.datacamp.com/courses/machine-learning-with-python"
      ]
    },
    // Week 2, 3, and 4 data follow here...
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
          <LearningPlan plan={mockData.learningPlan} />
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