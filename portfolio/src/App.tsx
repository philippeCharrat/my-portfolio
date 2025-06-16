import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import CV from './components/CV';
import Loader from './components/Loader';

function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [showCV, setShowCV] = useState<boolean>(false);

  useEffect(() => {
    const hasViewedIntro = localStorage.getItem('view-intro');
    if (hasViewedIntro) {
      setShowIntro(false);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        setShowCV(true);
      }, 1400); 
    } else {
      setShowIntro(true);
      setShowLoader(false);
    }
  }, []);

  const handleIntroFinished = () => {
    localStorage.setItem('view-intro', 'true');
    setShowIntro(false);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setShowCV(true);
    }, 1400);
  };

  return (
    <main className="main-container">
      {showLoader && <Loader></Loader>}
      {!showLoader && showIntro && (
        <Introduction onFinish={handleIntroFinished} />
      )}
      {!showLoader && showCV && <CV />}
    </main>
  );
}

export default App;
