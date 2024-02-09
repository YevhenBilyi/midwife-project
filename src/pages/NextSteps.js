import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function NextSteps() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/decisionGuide'); // Navigate to next page
  };

  return (
    <div>
      <h1>NextSteps</h1>
    </div>
  );
}

export default NextSteps;