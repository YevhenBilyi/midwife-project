import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function BestChoice() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/nextSteps'); // Navigate to next page
  };

  return (
    <div>
      <h1>BestChoice</h1>
      <button onClick={goToNextPage}>Go to NextSteps</button>
    </div>
  );
}

export default BestChoice;