import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Power3 } from 'gsap/all';
import img1 from '../images/firmware.jpg';
import img2 from '../images/chatbot.png';
import '../styles/experience.css';

function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2
        };

        const itemDelay = 0.1;

        const fadeupCallback = (entries, observer) => {
            let itemLoad = 0;
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const tl = gsap.timeline({ defaults: { ease: Power3.out } });
                    tl.set(entry.target, { visibility: "visible" });
                    tl.from(entry.target, {
                        duration: 1.5,
                        y: 200,
                        skewY: 40,
                        autoAlpha: 0,
                        delay: itemLoad * itemDelay,
                        ease: Power3.out
                    });
                    itemLoad++;
                    observer.unobserve(entry.target);
                }
            });
        };

        const fadeupObserver = new IntersectionObserver(fadeupCallback, options);

        const elements = containerRef.current.querySelectorAll("h1 span, img");
        elements.forEach((element) => {
            fadeupObserver.observe(element);
        });

        return () => {
            fadeupObserver.disconnect();
        };
    }, []);

    return (
        <section className="exp-section" ref={containerRef}>
            <h2>I am a teamworker!</h2>
            <div className="grid-container">
                <div className="item-1">
                    <h3 data-splitting="lines">Firmware Engineer</h3>
                    <h4>Intel Corporation</h4>
                    <p>Worked as a firmware engineer to write, design, debug, verify, and validate the code.</p>
                </div>
                <div className="item-2">
                    <img src={img1} alt="exp1" />
                </div>
                <div className="item-3">
                    <h3 data-splitting="lines">Software Engineer</h3>
                    <h4>Datadot Solutions</h4>
                    <p>Worked as a firmware engineer to write, design, debug, verify, and validate the code.</p>
                </div>
                <div className="item-4">
                    <img src={img2} alt="exp1" />
                </div>
            </div>
        </section>
    );
};

export default Experience;
