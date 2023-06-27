import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/experience.css';

const Experience = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const photos = gsap.utils.toArray('.photo:not(:first-child)');
        gsap.set(photos, { opacity: 0, scale: 0.5 });

        const animation = gsap.to(photos, {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 1,
        });

        ScrollTrigger.create({
            trigger: '.gallery',
            start: 'top top',
            end: 'bottom bottom',
            pin: '.right',
            animation: animation,
            scrub: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.kill();
            });
        };
    }, []);

    return (
        <div className="experience-container">
            <h2>Chronicle of Events!</h2>
            <div className="gallery">
                <div className="left">
                    <div className="details-section">
                        <div className="details">
                            <div className="headline year2016">
                                <h4>Few of my favourite courses during bachelors</h4>
                                <ul className="list-type">
                                    <li>Optimization techniques</li>
                                    <li>Datastructures and algorithms</li>
                                    <li>Advanced software testing</li>
                                    <li>Object oriented programming</li>
                                </ul>
                            </div>
                        </div>
                        <div className="details">
                            <div className="headline year2018">
                                <h4>My first professional experience</h4>
                                <ul className="list-type">
                                    <li>
                                        Developed a university admin management system that makes data visualization and analysis easy for efficient monitoring and management.
                                    </li>
                                    <li>
                                        Implemented a centralized cloud-sharing system with advanced security features to ensure secure file sharing.
                                    </li>
                                    <li>
                                        Utilized a revocable storage encryption-based algorithm to ensure that only authorized users can access files.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="details">
                            <div className="headline year2020">
                                <h4>I was eager to learn and grow, so I pursued my next experience</h4>
                                <ul className="list-type">
                                    <li>
                                        Contributed to the development of robust hardware-guided scheduling, hardware P-states, and thermal algorithms to optimize the performance of the 14th gen Meteor Lake Processor.
                                    </li>
                                    <li>
                                        Played a key role in optimizing code execution time by addressing unwanted read/write processes in the thermal plant leaf, achieving an impressive 15% improvement.
                                    </li>
                                    <li>
                                        Demonstrated expertise in debugging complex firmware issues by analyzing system logs, error messages and crash dumps.
                                    </li>
                                    <li>Awarded for energy efficiency achievements and mentoring interns.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="details">
                            <div className="headline year2022">
                                <h4>My favorite master's courses further developed my knowledge and skills in</h4>
                                <ul className="list-type">
                                    <li>High performance computing</li>
                                    <li>Heuristic problem solving</li>
                                    <li>Cloud computing</li>
                                    <li>Web development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="photo-content">
                        <div className="photo y2016">
                            <h3>2016</h3>
                            <p>Pursued master of technology in software engineering</p>
                        </div>
                        <div className="photo y2018">
                            <h3>2018</h3>
                            <p>Interned at Datadot Solutions</p>
                        </div>
                        <div className="photo y2020">
                            <h3>2020</h3>
                            <p>Worked at Intel Corporation</p>
                        </div>
                        <div className="photo y2022">
                            <h3>2022</h3>
                            <p>Pursued master of Science in computer Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;