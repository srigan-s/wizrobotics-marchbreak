import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DayPage from './components/DayPage';
import { campContent } from './data/campContent';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <HomePage onNavigate={setCurrentPage} />;
    }

    if (currentPage in campContent) {
      return (
        <DayPage
          day={currentPage}
          content={campContent[currentPage as keyof typeof campContent]}
        />
      );
    }

    return <HomePage onNavigate={setCurrentPage} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
