// Unused
import React from 'react';

const EvaluationPanel = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Evaluation & Feedback</h2>
      <div className="space-y-4">
        <div className="p-2 bg-green-200 rounded shadow-sm">
          Good clarity in explanation.
        </div>
        <div className="p-2 bg-yellow-200 rounded shadow-sm">
          Could improve on technical details.
        </div>
        {/* Add more feedback as needed */}
      </div>
    </div>
  );
};

export default EvaluationPanel;
