import React, { useState } from 'react';
import './css/questionPanel.css';
import QuestionItem from './QuestionItem';

const QuestionPanel = ({ questions, selectedQuestion, feedbackList, setSelectedQuestion}) => {
  return (
    <div className="flex max-h-96 w-full">
      <div className="bg-background border-muted max-h-96 w-full p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Questions</h2>
        <div className="flex-1 overflow-auto custom-scrollbar">
          <ul className="space-y-2">
            {Array.isArray(questions) && questions.map((q, index) => (
              <QuestionItem
                key={index}
                question={q}
                index={index}
                selectedQuestion={selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                feedback={feedbackList[index]}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;