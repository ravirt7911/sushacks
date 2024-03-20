import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Timeline.css";

const Timeline = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <div className="timeline">
      <Container>
        <Row>
          <Col>
            <div className="timeline-bx">
              <h2>TIMELINE</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="timeline-slider"
              >
                <div className="item">
                  <h5 style={{color:"white"}}>Python</h5>
                </div>
                <div className="item">
                  
                  <h5>HTML & CSS & JS</h5>
                </div>
                <div className="item">
                  
                  <h5>Competetive Programming</h5>
                </div>
                <div className="item">
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <h5>Data Structures and Algorithms</h5>
                </div>
                <div className="item">
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <h5>Data Science</h5>
                </div>
                <div className="item">
                  <h5>Cloud Computing</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Timeline;