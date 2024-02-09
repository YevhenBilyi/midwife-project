import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useStore from './store';
import WelcomePage from './pages/WelcomePage';
import DecisionGuide from './pages/DecisionGuide';
import NextSteps from './pages/NextSteps';
import HospitalBirths from './pages/HospitalBirths';
import HomeBirths from './pages/HomeBirths';
import BirthCenters from './pages/BirthCenters';
import BirthplaceOptions from './pages/BirthplaceOptions';
import BestChoice from './pages/BestChoice';

function App() {
    // first commit
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/birthplaceOptions" element={<BirthplaceOptions />} />
        <Route path="/homeBirths" element={<HomeBirths />} />
        <Route path="/hospitalBirths" element={<HospitalBirths />} />
        <Route path="/birthCenters" element={<BirthCenters />} />
        <Route path="/decisionGuide" element={<DecisionGuide />} />
        <Route path="/nextSteps" element={<NextSteps />} />
        <Route path="/bestChoice" element={<BestChoice />} />
        {/* Define routes for other pages */}
        {/* ... */}
      </Routes>
    </Router>
  );
}

export default App;
