import React from "react";
import "./About.scss";
import team from "../../assets/team.svg";
import left_pic from "../../assets/left_pic.png";
import right_pic1 from "../../assets/right_pic1.png";
import right_pic2 from "../../assets/right_pic2.png";

function About() {
    const stars = [
        "✨",
        "⭐",
        "💫",
        "❄️",
        "🌟",
        "✨",
        "⭐",
        "❄️",
        "❄️",
        "🌟",
        "✨",
        "⭐",
        "💫",
        "❄️",
        "🌟",
        "✨",
        "⭐",
        "❄️",
        "❄️",
        "🌟",
        "☀️",
        "⭐",
        "💫",
        "❄️",
        "🌟",
        "✨",
        "⭐",
        "❄️",
        "🌟",
        "🌟",
    ];
    const starsBottom = [
        123, 4, 425, 542, 243, -74, 845, 365, 652, 355, -9, 437, 3, 64, 854,
        904, 957, -36, 723, 643, 323, 6, 234, -58, 376, 485, 864, 901, 300, 954,
    ];
    const starsBottom2 = [
        133, -14, 525, 742, 43, -94, 5, 35, 62, 305, 293, 777, -13, 504, 154,
        104, -8, 939, 3, 222, 323, 215, 834, 158, 916, -95, 1, 101, 500, 794,
    ];
    const aboutContent = `Unleash your creativity and be a part of Rebase<01>,
     a month-long online hackathon extragavanza! Compete across various categories,
     showcasing your skill, creativity, and teamwork alongside peers who share your 
     passion. This is you chance to challenge yourself, learn new skills, and create.`;

    return (
        <div className="about-component-container">
            <div className="leftpic-container">
                <div className="left-pic-inline-container">
                    <img src={left_pic} alt="left" className="amongus-pic" />
                </div>
                <div className="stars-container1">
                    {stars.map((star, index) => (
                        <div
                            className="star"
                            style={{
                                display: "inline",
                                position: "relative",
                                left: "0%",
                                bottom: `${starsBottom[29 - index]}%`,
                            }}
                            key={`${index + 1}`}
                        >
                            {star}
                        </div>
                    ))}
                </div>
                <div className="stars-container2">
                    {stars.map((star, index) => (
                        <div
                            className="star"
                            style={{
                                display: "inline",
                                position: "relative",
                                left: "0%",
                                bottom: `${starsBottom2[(index + 21) % 30]}%`,
                            }}
                            key={`${index + 2}`}
                        >
                            {star}
                        </div>
                    ))}
                </div>
            </div>
            <div className="planet-container">
                <div className="content">
                    <div className="team-image">
                        <img
                            src={team}
                            className="amongus-team-image"
                            alt="amongus-team"
                        />
                    </div>
                    <div className="planet">
                        <div className="planet-content">
                            <div className="about-heading">ABOUT</div>
                            <div className="about-content">{aboutContent}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightpic-container">
                <div className="right-pics-container">
                    <div className="right-pics-inline-container">
                        <img
                            src={right_pic1}
                            alt="right1"
                            className="amongus-pic"
                        />
                        <img
                            src={right_pic2}
                            alt="right2"
                            className="amongus-pic"
                        />
                    </div>
                </div>
                <div className="stars-container1">
                    {stars.map((star, index) => (
                        <div
                            className="star"
                            style={{
                                display: "inline",
                                position: "relative",
                                left: "0%",
                                bottom: `${starsBottom[29 - index]}%`,
                            }}
                            key={`${index + 3}`}
                        >
                            {star}
                        </div>
                    ))}
                </div>
                <div className="stars-container2">
                    {stars.map((star, index) => (
                        <div
                            className="star"
                            style={{
                                display: "inline",
                                position: "relative",
                                left: "0%",
                                bottom: `${starsBottom2[index]}%`,
                            }}
                            key={`${index + 4}`}
                        >
                            {star}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
