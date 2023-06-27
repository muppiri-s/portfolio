import React from 'react';
import './App.css';
import './global.css';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skill';
import Experience from './components/experience';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <header>
        <Home />
      </header>
      <div className='container'>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;