import React from 'react';
import '../styles/projects.css';


const Project = () => {
    const skills_a = ["C++", "Cmake", "Git", "Ruby", "Linux", "GDB", "Firmware", "Python", "AWS", "Compilers"];
    const skills_b = ["React","Javascript", "Node.js", "Angular", "HTML", "CSS", "Bootstrap", "Rest API", "GSAP"];

    return (
        <div className='project-container'>
            <div className='project-heading'>
                <h2>Oh, I have the following skills <small>😇</small></h2>
            </div>
            <div className='project-wrapper'>
                <div className="section-reviews-bottom-wrapper review-card-anim1 project-row">
                    {skills_a.map((skill, index) => (
                        <div className="review-card" key={index}>
                            <h4 className="review-card-h4">{skill}</h4>
                        </div>
                    ))}
                </div>
                <div className="section-reviews-bottom-wrapper review-card-anim2 project-row">
                    {skills_b.map((skill, index) => (
                        <div className="review-card" key={index}>
                            <h4 className="review-card-h4">{skill}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Project;