import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Timeline.css";
import img0 from "../../assets/Picture10.png"
import img1 from "../../assets/Picture2.png"
import img2 from "../../assets/Picture11.png"
import img3 from "../../assets/Picture12.png"
import img4 from "../../assets/Picture13.jpg"
import img5 from "../../assets/Picture14.jpg"
import img6 from "../../assets/Picture183.png"
import img7 from "../../assets/Picture185.png"
import img8 from "../../assets/Picture17.png"
import img9 from "../../assets/Picture184.png"
import img10  from "../../assets/img_3.png"
import PhoneImg from "./assets/phn.jpg"
const Timeline = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
  console.log(currentSlide);
  },[currentSlide])
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const timelineItems = [
    {
      title: "Registration Start",
      date: "30-03-24",
      image: img0,
    },
    {
      title: "Registration Ends",
      date: "30-04-24",
      image: img2,
    },
    // {
    //   title: "TEAMS SHORTLISTING STARTS",
    //   date: "17-04-24",
    //   image: img3,
    // },
    {
      title: "Registration Fee Deadline",
      date: "21-04-24",
      image: img4,
    },
    {
      title: "DAYS OF HACKING",
      date: "27-04-24 & 28-04-24",
      image: img5,
    },
    {
      title: "OPENING CERMONY",
      date: "9:30 AM To 11:00 AM",
      image: img1,
    },
    {
      title: "HACKATHON STARTS",
      date: "11:00 AM",
      image: img8,
    },
    {
      title: "LUNCH BREAK",
      date: "1:00 TO 2:00 PM",
      image: img6,
    },
    {
      title: "DINNER BREAK",
      date: "9:00 TO 10:00 PM",
      image: img9,
    },
    {
      title: "BREAKFAST",
      date: "7:30 AM",
      image: img7,
    },
    {
      title: "HACKATHON ENDS",
      date: "11:00 AM",
      image: img10,
    },
    {
      title: "EVALUATION & JUDGEMENT",
      date: "12:30 PM",
      image: img1,
    },
    {
      title: "valedictory function",
      date: "1:30 PM",
      image: img1,
    },
  ];

  const progressBar = (
    <div id="timeline"className=" progress-bar">
      <div className="progress-text">
        <span>Total Tasks Completed</span>
        <div className="progress-partitions">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`progress-item ${
                index <= currentSlide ? "filled" : ""
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="timeline">
      <Container>
        <Row>
          <Col>
            <div className="timeline-bx">
              <h2>TIMELINE</h2>
              {progressBar}
              <div className="phone-container">
                <img src={PhoneImg} alt="" />
                <div className="phone-screen">
                  <Carousel
                    responsive={responsive}
                    infinite={false}
                    className="timeline-slider"
                    beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
                  >
                    {timelineItems.map((item, index) => (
                      <div key={index} className="item">
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title.toLowerCase()}</h5>
                        <p>{item.date.toUpperCase()}</p>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timeline;
