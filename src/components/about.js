import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from '../images/profile.jpg';
import { ThreeSixtyRounded, Settings, Quickreply, NoteAlt } from '@mui/icons-material';
import '../styles/about.css';

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const revealContent = () => {
      const image = document.querySelector('.about-container img');
      const text = document.querySelector('.about-text');

      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: image,
          start: 'top bottom',
          toggleActions: 'restart none none reset'
        }
      });

      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          toggleActions: 'restart none none reset'
        }
      });

      imageTimeline.to(image, {
        ease: 'power2',
        duration: 2,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
      });

      imageTimeline.to(image, {
        duration: 1,
        scale: 1
      }, '<');

      textTimeline.from(text, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
      });
    };

    revealContent();
  }, []);

  return (
    <section className='about-section'>
      <div className='about-container'>
        <img src={profile} alt='profile' />
        <div className="about-text">
          <h2>Little About Me.</h2>
          <p>
            Passionate developer who delves into the depths of machine intricacies, with a keen interest in web design and development. I find joy and challenge in the process, constantly optimizing code for efficiency and enhancing the user experience. I love the challenge to find transformative solutions that unlock hidden potential.
          </p>
          <div className="skills-section">
            <div className="skill">
              <ThreeSixtyRounded fontSize="large" />
              <p>Icon 1</p>
            </div>
            <div className="skill">
              <Settings fontSize="large" />
              <p>Icon 2</p>
            </div>
            <div className="skill">
              <Quickreply fontSize="large" />
              <p>Icon 3</p>
            </div>
            <div className="skill">
              <NoteAlt fontSize="large" />
              <p>Icon 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
