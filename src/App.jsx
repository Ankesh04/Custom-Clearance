import React, { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import LoginSignupPage from './pages/LoginSignupPage/LoginSignupPage.jsx';
import './index.css';

/**
 * The main App component.
 * This component acts as the root of the application and handles routing.
 * It uses state to determine which page (Landing or Login/Signup) to display.
 */
function App() {
  
  const [currentPage, setCurrentPage] = useState('landing');

  
  const navigateToLogin = () => {
    setCurrentPage('login');
  };
  
  
  const navigateToLanding = () => {
      setCurrentPage('landing');
  };

  return (
    <div>
      
      {currentPage === 'landing' && <LandingPage onNavigateToLogin={navigateToLogin} />}

      {currentPage === 'login' && <LoginSignupPage onNavigateToLanding={navigateToLanding} />}
    </div>
  );
}

export default App;

