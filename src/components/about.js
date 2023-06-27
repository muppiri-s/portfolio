import React, { useEffect } from 'react';
import { ThreeSixtyRounded, SignalCellularAlt, EmojiObjects, NoteAlt } from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import profile from '../images/profile.jpg';
import '../styles/about.css';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation.start({ x: '100vw' });
    }
  }, [inView, animation]);

  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div className="about-img">
          <img src={profile} alt="profile" />
        </div>
        <div ref={ref} className="about-text">
          <h2>Little About Me.</h2>
          <motion.p className="line" animate={animation}>
            Straddling the line between Gen Z and Gen Y, I am a Midwesterner.
            Molded by the winds that sweep across the heartland, I possess a
            strong passion for unraveling intricate challenges and discovering innovative
            solutions in coding. With a heart for web development and experimenting with the
            web as a creative medium, my portfolio is constantly changing as
            I pursue new ways to learn and use the web in innovative ways.
            <br /><br />
            <span>TIL: There is a dev mode in figma! 😯 </span>
          </motion.p>
          <br />
          <h4>Key Strengths:</h4>
          <motion.div className="skills-section" animate={animation}>
            <div className="skill">
              <ThreeSixtyRounded fontSize="large" />
              <p>Self Motivated</p>
            </div>
            <div className="skill">
              <SignalCellularAlt fontSize="large" />
              <p>Hard Working</p>
            </div>
            <div className="skill">
              <EmojiObjects fontSize="large" />
              <p>Creative</p>
            </div>
            <div className="skill">
              <NoteAlt fontSize="large" />
              <p>Detail Oriented</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
