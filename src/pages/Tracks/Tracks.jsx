import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Tracks.css';
import img1 from '../../assets/amongusred.png';

const TracksData = [
    {
        title: "AI/ML",
        description: "1 .The simplest way to understand how AI and ML relate to each other is: AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously."
    },
    {
        title: "WEB 3.0",
        description: "2 .The simplest way to understand how AI and ML relate to each other is: AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously."
    },
    {
        title: "CYBERSECURITY",
        description: "3 .The simplest way to understand how AI and ML relate to each other is: AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously."
    },
    {
        title: "APP DEVELOPMENT",
        description: "4 .The simplest way to understand how AI and ML relate to each other is: AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously."
    },
    {
        title: "CLOUD",
        description: "5 .The simplest way to understand how AI and ML relate to each other is: AI is the broader concept of enabling a machine or system to sense, reason, act, or adapt like a human. ML is an application of AI that allows machines to extract knowledge from data and learn from it autonomously."
    }
];

const Tracks = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="TracksHome">
            <div className="TracksHeader">
                <div className="TracksIcon">
                    <img src={img1} alt="" height="30px" style={{ marginRight: '10px' }} />
                    <motion.div
                        className="BlinkingCircle"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    ></motion.div>
                    <p>XXXXXXXXXXX</p>
                </div>
                <div className="TracksName">
                    TRACKS
                </div>
            </div>
            <div className="TracksContainer">
                <div className="TracksButtons">
                    {TracksData.map((track, i) => (
                        <motion.button
                            className={`TracksButton ${index === i ? 'active' : ''}`}
                            key={i}
                            onClick={() => { setIndex(i) }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {track.title}
                        </motion.button>
                    ))}
                </div>
                <motion.div
                    className="TracksDescriptionBox"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1>{TracksData[index].title}</h1>
                    <p>{TracksData[index].description}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Tracks;
