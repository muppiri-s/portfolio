import React from 'react';
import '../styles/home.css';
import { ArrowDropDown } from '@mui/icons-material';

const Home = () => {
  const resumeUrl = '/path/to/resume.pdf';
  const email = 'sahithi.muppiri@gmail.com';

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className='header'>
      <div className="header-intro">
        <p>HELLO STRANGER</p>
      </div>
      <div className='header-container'>
        <div className="navigation-container">
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Project</a>
              </li>
              <li>
                <a href="#conrtact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <h2>I'm</h2>
          <h1 style={{ fontFamily: "Autography" }}>Sahithi Muppiri</h1>
          <p>I &#x2764;&#xFE0E; to craft novel ideas into reality.</p>
          <div className="button-container">
            <button className="resume-button" onClick={() => window.open(resumeUrl, "_blank")} download>
              Resume
            </button>
            <button className="hire-me-button" onClick={() => window.location.href = `mailto:${email}`}>
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div className="down-arrow" onClick={handleScroll}>
        <ArrowDropDown />
      </div>
    </header>
  );
};

export default Home;
