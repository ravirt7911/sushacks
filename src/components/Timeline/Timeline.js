import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Timeline.css";
import img1 from "./assets/reg-begins.png";
import img2 from "./assets/img_2.png";
import img3 from "./assets/reg-ends.png";
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
      title: "Registration Begins",
      date: "20-03-24",
      image: img1,
    },
    {
      title: "Registration Ends",
      date: "20-03-24",
      image: img3,
    },
    {
      title: "Hacking Starts",
      date: "20-03-24",
      image: img1,
    },
    {
      title: "Hacking Ends",
      date: "20-03-24",
      image: img2,
    },
    {
      title: "Hacking Ends",
      date: "20-03-24",
      image: img1,
    },
    {
      title: "Hacking Ends",
      date: "20-03-24",
      image: img2,
    },
    {
      title: "Hacking Ends",
      date: "20-03-24",
      image: img1,
    },
  ];

  const progressBar = (
    <div id="timeline"className=" progress-bar">
      <div className="progress-text">
        Total Tasks Completed
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
                        <h5>{item.title}</h5>
                        <p>{item.date}</p>
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
