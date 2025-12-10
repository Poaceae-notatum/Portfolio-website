import React, { useState } from 'react';
import Home from './portfolio_page';
import ProjectsPage from './projects_page';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && <Home navigateTo={navigateTo} />}
      {currentPage === 'projects' && <ProjectsPage navigateTo={navigateTo} />}
    </div>
  );
}

export default App;