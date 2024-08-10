import React, { useState, useEffect } from 'react';
import { getQuestions, evaluateAnswer } from '../../services/mockInterviewService.js';

const MockInterviewLayout = ({leftPanel, centerPanel, footer }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const skills = JSON.parse(localStorage.getItem('selectedTopics'));
        const res = await getQuestions({ skills });
        localStorage.removeItem('selectedTopics');
        setQuestions(res);
        setLoading(false);
        setFeedbackList(new Array(res.length).fill(null));

      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const getFeedback = async (answer) => {
    const data = {
      question: questions[selectedQuestion].Question,
      userAnswer: answer,
      sampleAnswer: questions[selectedQuestion].Answer,
    }
    const feedback = await evaluateAnswer(data);
    setFeedbackList((prevFeedbackList) => {
      const newFeedbackList = [...prevFeedbackList];
      newFeedbackList[selectedQuestion] = feedback;
      return newFeedbackList;
    });
  };

  const onNext = () => {
    setSelectedQuestion((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
  };

  const onBack = () => {
    setSelectedQuestion((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="p-4 bg-blue-600 text-white text-center">
          Mock Interview Platform
        </header>
        <div className="flex flex-grow items-center justify-center">
          <div className="loader">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-600 text-white text-center">
        Mock Interview Platform
      </header>
      <div className="flex flex-grow">
        <aside className="w-1/3 p-4 bg-white shadow-md">
          {React.cloneElement(leftPanel, { 
            questions, 
            selectedQuestion, 
            feedbackList,
            setSelectedQuestion,
          })}
        </aside>
        <main className="flex-1 p-4 flex flex-col items-center justify-center">
          {React.cloneElement(centerPanel, {
            currentQuestion: questions[selectedQuestion],
            onNext,
            onBack,
            getFeedback
          })}
        </main>
      </div>
      {footer && <footer className="p-4 bg-gray-800 text-white">{footer}</footer>}
    </div>
  );
};

export default MockInterviewLayout;