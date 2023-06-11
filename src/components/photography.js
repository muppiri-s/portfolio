import React from "react";
import Masonry from '@mui/lab/Masonry';

import '../styles/photography.css';

const Photos = () => {
    const images = [
        { pic: require('../images/img1.jpeg') },
        { pic: require('../images/img3.jpeg') },
        { pic: require('../images/img2.jpeg') },
        { pic: require('../images/img4.jpeg') },
        { pic: require('../images/img5.jpeg') },
        { pic: require('../images/img6.jpeg') },
    ];

    return (
        <div className="photo-container">
            <Masonry columns={3} spacing={2}>
                {images.map((image, index) => (
                    <div key={index} className="masonry-item">
                        <img
                            src={image.pic}
                            loading="lazy"
                            alt="images"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </div>

    );
};

export default Photos;
