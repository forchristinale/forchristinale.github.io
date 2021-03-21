import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Happy birthday CHRISTINA 🥰" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {"Hi my cutie, happy birthday 🥰"}
                </p>
                <p className="about-wrapper__info-text">
                  {"It's your 22nd birthday, your TSWIFT year, your golden year :)"}
                </p>
                <p className="about-wrapper__info-text">
                  {
                    "I hope your birthday is filled with love, cheer, fun, smiles and lovely memories!"}
                </p>
                <p className="about-wrapper__info-text">
                  {"Isn't it so nerdy your boyfriend coded out this website for you? heheheheh"}
                </p>
                <p className="about-wrapper__info-text">
                  {"🥰 I love you 🥰"}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
