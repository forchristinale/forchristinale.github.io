import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import mom from '../../videos/mom.mp4'
import dad from '../../videos/dad.mp4'
import auntuncle from '../../videos/aunt-uncle.mp4'
import kimmie from '../../videos/kimmie.mp4'
import jane from '../../videos/jane.mp4'

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="" />
          <Row>
          <Col lg={12} sm={12} style={{padding:"20px"}}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <video width="70%" controls>
                    <source src={mom} type="video/mp4" />
                  </video>
                </Fade>
            </Col>
            <Col lg={12} sm={12} style={{padding:"20px"}}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <video width="70%" controls>
                    <source src={dad} type="video/mp4" />
                  </video>
                </Fade>
            </Col>
            <Col lg={12} sm={12} style={{padding:"20px"}}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <video width="70%" controls>
                    <source src={kimmie} type="video/mp4" />
                  </video>
                </Fade>
            </Col>
            <Col lg={12} sm={12} style={{padding:"20px"}}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <video width="70%" controls>
                    <source src={auntuncle} type="video/mp4" />
                  </video>
                </Fade>
            </Col>
            <Col lg={12} sm={12} style={{padding:"20px"}}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <video width="70%" controls>
                    <source src={jane} type="video/mp4" />
                  </video>
                </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
