import React from 'react';
import { motion } from 'framer-motion';

import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>Little About Me.</h2>
        <div className="vertical-line"></div>
        <motion.div className="about-description" initial={{ opacity: 0 }} whileInView={{ opacity: 1, x:20 }} transition={{ duration: 3 }}>
          <p>Passionate developer who delves into the depths of machine intricacies, with a keen interest in web design and development. I find joy and challenge in the process, constantly optimizing code for efficiency and enhancing the user experience. I love the challenge to find transformative solutions that unlock hidden potential.</p>
          <div className="number-row">
            <div className="number-box">
              <p className="number-value">02+</p>
              <p className="number-label">Work Experience</p>
            </div>
            <div className="number-box">
              <p className="number-value">10+</p>
              <p className="number-label">Completed Projects</p>
            </div>
            <div className="number-box">
              <p className="number-value">05+</p>
              <p className="number-label">Theoretical Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
