import React from 'react';

const SubList = ({ title, grade, feedback, sampleAnswer, showAnswer, setShowAnswer }) => (
  <div className="sub-list bg-white p-4 rounded-md shadow-md mt-2">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm">Score: {grade}</p>
    <p className="text-sm">{feedback}</p>
    <hr className="my-2" />
    <button
      className="text-blue-500 underline"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      {showAnswer ? 'Hide Answer' : 'Show Answer'}
    </button>
    {showAnswer && <p className="mt-2">{sampleAnswer}</p>}
  </div>
);

export default SubList;