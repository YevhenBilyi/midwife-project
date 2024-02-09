import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function DecisionGuide() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/bestChoice'); // Navigate to next page
  };

  return (
    <div>
      <h1>DecisionGuide</h1>
      <button onClick={goToNextPage}>Go to BestChoice</button>
    </div>
  );
}

export default DecisionGuide;