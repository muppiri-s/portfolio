import React, { useState, useEffect } from "react";
import Masonry from '@mui/lab/Masonry';
import { motion } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';

import '../styles/photography.css';

const Photos = () => {
    const [zoomedImage, setZoomedImage] = useState(null);

    const images = [
        { pic: require('../images/img1.jpeg') },
        { pic: require('../images/img3.jpeg') },
        { pic: require('../images/img2.jpeg') },
        { pic: require('../images/img4.jpeg') },
        { pic: require('../images/img5.jpeg') },
        { pic: require('../images/img6.jpeg') },
        { pic: require('../images/img7.jpeg') },
        { pic: require('../images/img8.jpeg') },
        { pic: require('../images/img3.jpeg') },


    ];

    const handleImageClick = (image) => {
        setZoomedImage(image);
    };

    const handleZoomedImageClose = () => {
        setZoomedImage(null);
    };

    const [activeWordIndex, setActiveWordIndex] = useState(0);

    const words = ["Cook", "Explore", "Hike"];
    const colors = ["red", "green", "blue"];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Rotate words every 2 seconds

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="photo-container">
            <h2>When I am bored, I{" "}
                <motion.span
                    key={activeWordIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: colors[activeWordIndex] }}
                >
                    {words[activeWordIndex] + '.'}
                </motion.span>
            </h2>
            <Masonry columns={3} spacing={3}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.pic}
                            alt="images"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleImageClick(image)}
                        />
                    </div>
                ))}
            </Masonry>

            {zoomedImage && (
                <div className="zoomed-image-overlay">
                    <div className="zoomed-image-container">
                        <img
                            src={zoomedImage.pic}
                            alt="zoomed imge"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                            }}
                        />
                        <div className="close-icon" onClick={handleZoomedImageClose}>
                            <CloseIcon style={{ fontSize: 24, color: '#fff' }} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Photos;
