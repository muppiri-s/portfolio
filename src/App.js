import './App.css';

import Home from './components/home';
import About from './components/about';
import Education from './components/education';
import Contact from './components/contact';
import Skills from './components/skills';
import Photos from './components/photography';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Education />
      <Photos />
      <Contact />
    </>
  );
}

export default App;
