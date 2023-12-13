import './App.css';
import React, { useState } from 'react';
import Loginpage from './Components/Loginpage';
import SignupForm from './Components/SignupForm';

function App() {
  const [currentPage, setCurrentPage] = useState('SignupForm');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'SignupForm' && <SignupForm onNavigate={() => handleNavigate('Loginpage')} />}
      {currentPage === 'Loginpage' && <Loginpage onNavigate={() => handleNavigate('SignupForm')} />}
    </div>
  );
}

export default App;