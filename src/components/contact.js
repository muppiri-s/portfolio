import React from 'react';
import { Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import hi from '../images/hi.png';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className='contact-container' id="contact">
            <h2>Buh-Bye <small>👋</small></h2>
            <div className='contact-section'>
                <div className='bye-img'>
                    <img src={hi} alt="hi" />
                </div>
                <div className='contact-title'>
                    <p>It was great meeting you! I'm always open to new opportunities to collaborate, so if you think there's a way we could work together, please let me know.</p>
                    <p>Cell: +1 260 804-1404</p>
                    <p>Email: <a href="mailto:sahithi.muppiri@gmail.com"> sahithi.muppiri@gmail.com</a></p>
                    <div className='contact-icons'>
                        <h4>I'm available at </h4>
                        <a className="icon instagram" href="https://www.instagram.com/sahithi_muppiri/">
                            <Instagram style={{ fontSize: '24px' }} />
                        </a>
                        <a className="icon linkedin" href='https://www.linkedin.com/in/sahithi-muppiri/'>
                            <LinkedIn style={{ fontSize: '24px' }} />
                        </a>
                        <a className="icon github" href='https://github.com/muppiri-s'>
                            <GitHub style={{ fontSize: '24px' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;