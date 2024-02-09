import React from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function BirthplaceOptions() {
  const navigate = useNavigate();

  const goToNextPage = (choice) => {
    navigate(`/${choice}`); // Navigate to next page
  };

  return (
    <div>
      <h1>BirthplaceOptions</h1>
      <button onClick={()=>goToNextPage("homeBirths")}>Go to HomeBirths</button>
      <button onClick={()=>goToNextPage("hospitalBirths")}>Go to HospitalBirths</button>
      <button onClick={()=>goToNextPage("birthCenters")}>Go to BirthCenters</button>
    </div>
  );
}

export default BirthplaceOptions;