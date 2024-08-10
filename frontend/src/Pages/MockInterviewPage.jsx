import React from 'react';
import CameraFeed from '../components/MockInterview/CameraFeed';
import EvaluationPanel from '../components/MockInterview/EvaluationPanel';
import MockInterviewLayout from '../components/MockInterview/MockInterviewLayout';
import QuestionPanel from '../components/MockInterview/QuestionPanel';

const MockInterviewPage = () => {
  return (
    <MockInterviewLayout
      leftPanel={<QuestionPanel/>}
      centerPanel={<CameraFeed />}
      rightPanel={<EvaluationPanel />}
    />
  );
};

export default MockInterviewPage;
