import React, { useState } from 'react';
import SubList from './SubList';
import PlayIcon from './PlayIcon';
import DownArrowIcon from './DownArrowIcon';

const QuestionItem = ({ question, index, selectedQuestion, setSelectedQuestion, feedback }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleQuestionClick = () => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
      setShowAnswer(false);
    }
  };

  return (
    <li className="question-item">
      <div
        className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${selectedQuestion === index ? 'bg-muted/50 border border-black p-2' : 'hover:bg-muted/50'
          }`}
        onClick={handleQuestionClick}
      >
        <PlayIcon className={`w-4 h-4 ${selectedQuestion === index ? 'text-primary' : 'text-muted-foreground'}`} />
        <span className="font-medium">{index + 1}.</span>
        <span className="question-text" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
          {question.Question}
        </span>        
        <DownArrowIcon
          className="ml-auto w-5 h-5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShowFeedback(!showFeedback);
          }}
        />
      </div>
      {showFeedback && (
        feedback ? (
          <SubList
            title={feedback.title}
            grade={feedback.score}
            feedback={feedback.feedback}
            sampleAnswer={feedback.correctedAnswer}
            showAnswer={showAnswer}
            setShowAnswer={setShowAnswer}
          />
        ) : (
          <div className="sub-list bg-white p-4 rounded-md shadow-md mt-2">
            <p className="text-sm">Yet to evaluate</p>
          </div>
        )
      )}
    </li>
  );
};

export default QuestionItem;