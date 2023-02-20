import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/bunno.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi, my name is Van.</h1>
                  <p>
                    A front end developer with an addiction to discovering new coding perspectives. I really mean it!
                  </p>
                  <button href="#skills">Let's Dive In <ArrowRightCircle size={25} /></button>
              
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;