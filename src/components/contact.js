import React from 'react';
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';

import '../styles/contact.css';
import '../styles/scroll.css';

const Contact = () => {
    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className='contact-container'>
            <h2>Buh-Bye <small>👋</small></h2>
            <div className='contact-title'>
                <h3>Thank's for stopping by, I am actively searching for opportunities to join a team that shares similar skills and goals. If you believe we could be a good fit together, please
                    give a call at <span className="highlight">
                        +1 260 804-1404</span> or <a href="mailto:example@example.com">email me</a>.</h3>
            </div>
            <div className='contact-icons'>
                <h2>I'm available at</h2>
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
    );
};

export default Contact;