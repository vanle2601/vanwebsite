import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import meter1 from "../assets/img/seo.png";
import meter2 from "../assets/img/time-management.png";
import meter3 from "../assets/img/method.png";

const Skills = () => {
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
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={7} xl={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a professional with cross-discipline best practices, I am
                able to provide a holistic perspective on software development
                projects.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="SEO" />
                  <h5>SEO</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Agile Method" />
                  <h5>Agile Methodology</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="CI/CD" />
                  <h5>CI/CD</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="OOP" />
                  <h5>OOP</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="dev" />
                  <h5>Scrum Methodology</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="dev" />
                  <h5>CMS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
