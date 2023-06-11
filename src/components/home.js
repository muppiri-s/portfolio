import React from 'react';

import '../styles/home.css';

const Home = () => {
  const handleDownloadResume = () => {
    const resumeURL = 'www.google.com';
    window.open(resumeURL, '_blank');
  };

  return (
    <div className='home-container' >
      <div className="header-section sticky">
        <h1>HELLO</h1>
      </div>

      <div className="parallax-bg">
        <h2>I'm</h2>
        <h1>Sahithi Muppiri</h1>
        <h3>c++ | Web Developer</h3>
        <button onClick={handleDownloadResume} disabled={false} variant="filledTonal">
          Download Resume
        </button>
      </div>
    </div >
  );
};

export default Home;