import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const QuickQuiz = ({ question, options, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setIsAnswered(true);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">Daily Quiz</Typography>
        <Typography variant="body1">{question}</Typography>
        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              disabled={isAnswered}
            />
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit} disabled={!selectedAnswer || isAnswered}>
          Submit Answer
        </Button>
        {isAnswered && (
          <Typography variant="body2" color={selectedAnswer === correctAnswer ? "success.main" : "error.main"}>
            {selectedAnswer === correctAnswer ? "Correct!" : `Incorrect. The correct answer is ${correctAnswer}.`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default QuickQuiz;