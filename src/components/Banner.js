import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1>Hi, my name is Van.</h1>
            <p>
              A front end developer with an addiction to discovering new coding
              perspectives. I really mean it!
            </p>
            <button href="#skills">
              Let's Dive In <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
