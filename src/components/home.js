import React from 'react';
import '../styles/home.css';
import wave from '../images/wave.png';
import DownloadIcon from '@mui/icons-material/Download';
import { RocketLaunch } from '@mui/icons-material';

const Home = () => {
  const resumeUrl = 'https://drive.google.com/file/d/15i1LwbvaSKcDl7Gl1H862Le4BhXJsGuY/view?usp=sharing';
  const email = 'sahithi.muppiri@gmail.com';

  const handleScroll = (e) => {
    const target = e.target;
    const id = target.id;

    if (id === 'about-link') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop,
          behavior: 'smooth',
        });
      }
    } else if (id === 'projects-link') {
      const projectsSection = document.getElementById('project');
      if (projectsSection) {
        window.scrollTo({
          top: projectsSection.offsetTop,
          behavior: 'smooth',
        });
      }
    } else if (id === 'contact-link') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className='header-container'>
      <div className="navigation-container">
        <nav>
          <ul>
            <li>
              <a href="#about" id="about-link" onClick={handleScroll}>About</a>
            </li>
            <li>
              <a href="#project" id="projects-link" onClick={handleScroll}>Project</a>
            </li>
            <li>
              <a href="#contact" id="contact-link" onClick={handleScroll}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h3>Hello, I'm</h3>
        <h1>Sahithi <span>Muppiri</span></h1>
        <p>I &#x2764;&#xFE0E; to craft novel ideas into reality.</p>
        <div className="bottom-container">
          <img src={wave} alt="stand" />
        </div>
        <div className="button-container">
          <button className="resume-button" onClick={() => window.open(resumeUrl, "_blank")}>
            <DownloadIcon /> Resume
          </button>

          <button className="hire-me-button" onClick={() => window.location.href = `mailto:${email}`}>
            <RocketLaunch /> Hire Me
          </button>
        </div>
        <div className="shadow-title">code design inspire</div>
      </div>
    </div>
  );
};

export default Home;
