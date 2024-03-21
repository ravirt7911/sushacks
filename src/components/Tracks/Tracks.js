import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Tracks.css";
import img1 from "../../assets/amongusred.png";

const TracksData = [
  {
    title: "Fintech ",
    description:
      "Revolutionizing the finance industry through cutting-edge technology solutions, Fintech explores innovative ways to manage finances, streamline transactions, and enhance financial services for individuals and businesses alike.",
  },
  {
    title: "Healthtech ",
    description:
      "Healthtech leverages technology to transform healthcare delivery, from patient care and diagnostics to data management and telemedicine, ultimately improving accessibility, efficiency, and outcomes in the healthcare sector.",
  },
  {
    title: "Edutech ",
    description:
      "Edutech revolutionizes education by integrating technology into learning processes, offering personalized learning experiences, interactive content, and remote learning solutions to enhance accessibility and effectiveness in education.",
  },
  {
    title: "Agritech ",
    description:
      "Agritech harnesses technology to optimize agricultural practices, from precision farming and crop monitoring to supply chain management, aiming to increase productivity, sustainability, and profitability in the agriculture industry.",
  },
  {
    title: "Greentech ",
    description:
      "Greentech focuses on developing sustainable technology solutions to address environmental challenges, including renewable energy, waste management, and eco-friendly manufacturing, promoting a greener and more sustainable future.",
  },
  // {
  //   title: "Retailtech (Retail Technology)",
  //   description:
  //     "Retailtech revolutionizes the retail industry by integrating technology into every aspect of the shopping experience, from online platforms and e-commerce solutions to personalized marketing and inventory management.",
  // },
  {
    title: "Traveltech ",
    description:
      "Traveltech transforms the travel industry by leveraging technology to enhance booking experiences, streamline logistics, and provide personalized travel recommendations, ultimately improving convenience and efficiency for travelers.",
  },
  {
    title: "Socialtech ",
    description:
      "Socialtech explores innovative ways to leverage technology for social good, including social networking platforms, community-building tools, and digital activism, fostering connections and driving positive societal change.",
  },
  // {
  //   title: "Logistics and Supply Chain",
  //   description:
  //     "Logistics and Supply Chain utilizes technology to optimize the movement of goods and materials, from inventory management and transportation logistics to supply chain visibility and real-time tracking, enhancing efficiency and reducing costs in global supply chains.",
  // },
  {
    title: "Cybersecurity",
    description:
      "Cybersecurity focuses on protecting digital systems, networks, and data from cyber threats and attacks, employing advanced technologies and strategies to safeguard sensitive information and ensure the integrity and confidentiality of digital assets.",
  },
  {
    title: "Web 3",
    description:
      "Web 3 represents the next evolution of the internet, characterized by decentralized architectures, blockchain technology, and peer-to-peer interactions, offering enhanced privacy, security, and user control in online ecosystems.",
  },
  {
    title: "Miscellaneous",
    description:
      "Miscellaneous encompasses a diverse range of technology tracks, including emerging technologies, interdisciplinary fields, and niche areas not covered by other categories, offering opportunities for exploration and innovation across various domains.",
  },
];

const Tracks = () => {
  const [index, setIndex] = useState(0);

  return (
    <div id="tracks" className="TracksHome">
      <div className="TracksHeader">
        <div className="TracksIcon">
          <img
            src={img1}
            alt=""
            height="30px"
            style={{ marginRight: "10px" }}
          />
          <motion.div
            className="BlinkingCircle"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
          <p>XXXXXXXXXXX</p>
        </div>
        <div className="TracksName">TRACKS</div>
      </div>
      <div className="TracksContainer">
        <div className="TracksButtons">
          {TracksData.map((track, i) => (
            <motion.button
              className={`TracksButton ${index === i ? "active" : ""}`}
              key={i}
              onClick={() => {
                setIndex(i);
              }}
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
