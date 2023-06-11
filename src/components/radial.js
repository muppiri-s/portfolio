import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import VisibilitySensor from 'react-visibility-sensor';
import '../styles/radial.css'

const Radial = () => {
    const data = [
        { id: 1, value: 89, text: 'React' },
        { id: 2, value: 90, text: 'JS',  },
        { id: 3, value: 95, text: 'CSS',  },
        { id: 4, value: 97, text: 'C++', },
        { id: 5, value: 92, text: 'Git', },
        { id: 6, value: 89, text: 'Java',  },
    ];

    return (
        <div className="radial-container">
            <div className="radial-items">
                {data.map((item) => (
                    <div key={item.id} className="radial-item">
                        <VisibilitySensor>
                            {({ isVisible }) => {
                                const percentage = isVisible ? item.value : 0;
                                return (
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={{
                                            root: { width: '50px' },
                                            path: {
                                                strokeLinecap: 'round',
                                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                            },
                                            trail: { stroke: '#f0f0f0' },
                                            text: { fontSize: '18px', fill: '#888' },
                                            background: { fill: '#fff' },
                                        }}
                                    />
                                );
                            }}
                        </VisibilitySensor>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Radial;
