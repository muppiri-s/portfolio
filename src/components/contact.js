import React, { useEffect, useState } from 'react';
import { Instagram, LinkedIn, GitHub, KeyboardArrowUp } from '@mui/icons-material';

import '../styles/contact.css';
import '../styles/scroll.css';

const Contact = () => {
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    const handleArrowClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [showArrow, setShowArrow] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const shouldShowArrow = scrollTop > 0;
        setShowArrow(shouldShowArrow);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='contact-card'>
                <div className='contact-title'>
                    <span>Let's<br />talk.</span>
                </div>
                <div className='contact-details'>
                    <a href="mailto:sahithimuppiri@gmail.com">sahithimuppiri@gmail.com</a>
                    <span>+1 (260) 804-1404</span>
                    <div className='contact-icons'>
                        <button className="icon-button" onClick={() => handleLinkClick('https://www.instagram.com/')}>
                            <Instagram />
                        </button>
                        <button className="icon-button" onClick={() => handleLinkClick('https://www.linkedin.com/')}>
                            <LinkedIn />
                        </button>
                        <button className="icon-button" onClick={() => handleLinkClick('https://github.com/')}>
                            <GitHub />
                        </button>
                    </div>
                </div>
            </div>
            {showArrow && (
                <button className="scroll-to-top" onClick={handleArrowClick}>
                    <KeyboardArrowUp />
                </button>
            )}
        </>
    );
};

export default Contact;