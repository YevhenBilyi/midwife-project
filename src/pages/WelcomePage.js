import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/birthplaceOptions'); // Navigate to next page
  };

  return (
    <div>
      <h1>WelcomePage</h1>
      <button onClick={goToNextPage}>Go to Page 2</button>
    </div>
  );
}

export default WelcomePage;