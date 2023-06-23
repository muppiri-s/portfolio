import '../styles/skills.css';

const Skills = () => {
    const projectsList = [
        {
            name: "Lo Encontre",
            description: "shopping website",
            technologies: ["React", "Node.js", "MongoDB"],
            link: "https://github.com/muppiri-s/Lo-Encontre",
            image: require('../images/loEncontre.jpg')
        },
        {
            name: "Genetic",
            description: "shopping website",
            technologies: ["C++", "OpenMP"],
            link: "https://github.com/muppiri-s/Genetic-Disease-Algorithm-Optimization",
            image: require('../images/genetic.jpg')
        },
        {
            name: "Crop",
            description: "shopping website",
            technologies: ["Java", "Python", "Android"],
            link: "https://github.com/muppiri-s/Crop-Suggestion",
            image: require('../images/smartcrop.jpg')
        },
        {
            name: "Indeed",
            description: "shopping website",
            technologies: ["Python", "C#", ".Net"],
            link: "https://github.com/muppiri-s/indeed_jobs_analyst_using_python",
            image: require('../images/trash.png')
        },
    ];

    return (
        <div className='skills-container'>
            <div className='skills-heading'>
                <h2>Few of my personal best projects</h2>
            </div>
            <div className='skills-content'>
                <div className='skills-card'>
                    {projectsList.map((project, index) => (
                        <div className="skill-card" key={index}>
                            <div className='skill-img-container'>
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className='skills-text'>
                                <h4>{project.name}</h4>
                                <p>{project.description}</p>
                                <a href={project.link}>Source Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;