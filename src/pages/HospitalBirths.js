import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function HospitalBirths() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/decisionGuide'); // Navigate to next page
  };

  return (
    <div>
      <h1>HospitalBirths</h1>
      <button onClick={goToNextPage}>Go to Page 2</button>
    </div>
  );
}

export default HospitalBirths;