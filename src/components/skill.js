import React from 'react';
import '../styles/skill.css';


const Skills = () => {
    const skills_a = ["C++", "Cmake", "Git", "Ruby", "Linux", "GDB", "Python", "AWS", "Compilers", "Framer", "Flask", "MySQL"];
    const skills_b = ["React","Javascript", "Node.js", "Angular", "HTML", "CSS", "Bootstrap", "Rest API", "GSAP", "Motion UI", "Express", "MongoDB"];

    return (
        <div className='skill-container'>
            <div className='skill-heading'>
                <h2>Oh, I have the following skills <small>😇</small></h2>
                <p>hover to slow down</p>
            </div>
            <div className='skill-wrapper'>
                <div className="skill-row card-anime1">
                    {skills_a.map((skill, index) => (
                        <div className="card" key={index}>
                            <h4 className="card-h4">{skill}</h4>
                        </div>
                    ))}
                </div>
                <div className="skill-row card-anime2">
                    {skills_b.map((skill, index) => (
                        <div className="card" key={index}>
                            <h4 className="card-h4">{skill}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Skills;