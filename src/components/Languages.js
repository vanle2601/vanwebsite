import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LanguagesCard from './LanguagesCard';

import icon1 from '../assets/img/HTML5_Logo.svg';
import icon2 from '../assets/img/CSS3_logo.svg';
import icon3 from '../assets/img/React-icon.svg';
import icon4 from '../assets/img/Bootstrap_logo.svg';
import icon5 from '../assets/img/javascript_logo.svg';
import icon6 from '../assets/img/materialui_logo.svg';
import icon7 from '../assets/img/Node_logo.svg';
import icon8 from '../assets/img/npm_logo.svg';
import icon9 from '../assets/img/rapidapi-logo.svg';

import colorSharp from "../assets/img/color-sharp.png"

const Languages = () => {
    const languages = [
        {
            title: 'HTML5',
            imgUrl: icon1
        },
        {
            title: 'CSS3',
            imgUrl: icon2
        },
        {
            title: 'React.js',
            imgUrl: icon3
        },
        
        {
            title: 'JavaScript',
            imgUrl: icon5
        },
        
        {
            title: 'Node.js',
            imgUrl: icon7
        },
        
    ]

    const libraries = [
        {
            title: 'Bootstrap',
            imgUrl: icon4
        },
        {
            title: 'Material UI',
            imgUrl: icon6
        },
        {
            title: 'npm',
            imgUrl: icon8
        },
        {
            title: 'Rapid API',
            imgUrl: icon9
        },
    ]
    
      return (
        <section className="languages">
            <Container className="languages-bx">
                <Row className="languages-row">
                    <Col size={12}>
                    <h2>Languages</h2>
                    <Row>
                                {
                                languages.map((language, index) => {
                                    return (
                                    <LanguagesCard
                                        key={index}
                                        {...language}
                                        />
                                    )
                                })
                                }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="languages-bx">
                <Row className="languages-row">
                    <Col size={12}>
                    <h2>Libraries</h2>
                    <Row>
                                {
                                libraries.map((language, index) => {
                                    return (
                                    <LanguagesCard
                                        key={index}
                                        {...language}
                                        />
                                    )
                                })
                                }
                        </Row>
                    </Col>
                </Row>
            </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-img"></img>
    </section>
      )
    }

export default Languages;