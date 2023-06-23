import React from 'react';
import { motion } from 'framer-motion';

import '../styles/progressBar.css';

function Progressbar({ value, text }) {
    return (
        <div className="progressbar-container">
            <div className="progressbar">
                <motion.div
                    className="bar"
                    initial={{ width: '0%' }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 2 }}
                />
                <div className="progressbar-text-container">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Progressbar;
