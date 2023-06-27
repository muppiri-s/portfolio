import React from 'react';

const Footer = () => {
    const handleArrowClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleArrowClick}
            className="black-button"
            style={{
                border: 'none',
                background: 'black',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
            }}
        >
           That is all. Click to scroll back to the top!
        </button>
    );
};

export default Footer;
