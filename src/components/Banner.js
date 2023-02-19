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
                    You've just entered my little world 
                    where I share with you all of my exciting projects!
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