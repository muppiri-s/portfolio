import React from 'react';
import './App.css';
import './global.css';

import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Experience from './components/experience';
import Contact from './components/contact';
import Skills from './components/skills';
import Test from './components/test';

const App = () => {
  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className='header-wrapper'>
        <Home />
      </div>
      <div className='container'>
        <About />
        <Test />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
      <footer>
        <button className="scroll-to-top" onClick={handleArrowClick}>
          YOU'VE REACHED THE END, GO BACK TO TOP!
        </button>
      </footer>

    </>
  );
};

export default App;
