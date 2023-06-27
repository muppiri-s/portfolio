import React, { useEffect, useRef, useMemo } from 'react';
import '../styles/project.css';
import hoverEffect from 'hover-effect';
import overlay from '../images/overlay.webp';

import shopImage from '../images/shopImg.jpg';
import geneticImage from '../images/genetic.jpg';
import smartCropImage from '../images/smartcropImg.jpg';
import careerImg from '../images/careerImg.jpg';

import shopImage2 from '../images/Frame 2.png';
import geneticImg2 from '../images/Frame 3.png';
import smartCrop2 from '../images/Frame 1.png';
import careerImg2 from '../images/Frame 4.png';

const Projects = () => {
    const projectsList = useMemo(
        () => [
            {
                name: 'Lo Encontre',
                description: 'Search engine',
                technologies: ['React', 'Node', 'MongoDB', 'Express'],
                link: 'https://github.com/muppiri-s/Lo-Encontre',
                image1: shopImage,
                image2: shopImage2,
                color: '#A873A0'
            },
            {
                name: 'GeneFit Optimization',
                description: 'Algorithm enhancement',
                technologies: ['C++', 'OpenMP'],
                link:
                    'https://github.com/muppiri-s/Genetic-Disease-Algorithm-Optimization',
                image1: geneticImage,
                image2: geneticImg2,
                color: '#692E2E'
            },
            {
                name: 'Smart Crop',
                description: 'Android app',
                technologies: ['Java', 'Flask', 'Android'],
                link: 'https://github.com/muppiri-s/Crop-Suggestion',
                image1: smartCropImage,
                image2: smartCrop2,
                color: '#47603F'
            },
            {
                name: 'CareerMatch AI',
                description: 'Progressive Web App',
                technologies: ['Python', 'C#', '.Net'],
                link:
                    'https://github.com/muppiri-s/indeed_jobs_analyst_using_python',
                image1: careerImg,
                image2: careerImg2,
                color: '#465589'
            },
        ],
        []
    );

    const projImgRef = useRef([]);

    useEffect(() => {
        projectsList.forEach((project, index) => {
            new hoverEffect({
                parent: projImgRef.current[index],
                intensity: 0.3,
                image1: project.image1,
                image2: project.image2,
                displacementImage: overlay,
            });
        });
    }, [projectsList]);

    return (
        <div className='projects-container' id='project'>
            <h2>Few of my personal best projects</h2>
            <div className='projects-content'>
                {projectsList.map((project, index) => (
                    <div className='proj-card' key={index}>
                        <div className='proj-tech'>
                            <h4>{project.technologies.join(' | ')}</h4>
                        </div>
                        <div className='proj-img-container' ref={(el) => (projImgRef.current[index] = el)}></div>
                        <div className='proj-text'>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                style={{ color: project.color, '--after-background-color': project.color }}
                            >
                                View Source Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <a href='https://github.com/muppiri-s'>View More Projects</a>
        </div>
    );
};

export default Projects;
