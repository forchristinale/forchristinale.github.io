import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="heh happy birthday" />
        <Fade bottom duration={1000} delay={800} distance="30px">
            <p className="contact-wrapper__text">
              {"I hope the surprise was lovely and I hope loved the birthday messages heh"}
            </p>
            <p className="contact-wrapper__text">
              {"I hope today is incredible, and I love you :)"}
            </p>
            <p className="contact-wrapper__text">
              {"Happy birthday to you, the best thing that has ever happened to me"}
            </p>
            <p className="contact-wrapper__text">
              {"Love, Geo Min"}
            </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
