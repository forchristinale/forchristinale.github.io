import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
    const { lang } = headData;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chimichurri</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Page not found" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chimichurri
                    <span role="img" aria-label="emoji">
                        🌿
                    </span>
                </h1>
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>1 bundle of cilantro</p></li>
                        <li><p>Honey - 1 tbsp</p></li>
                        <li><p>Minced garlic - 1 tbsp</p></li>
                        <li><p>White wine vinegar - 1 tbsp</p></li>
                        <li><p>1/2 Lemon squeezed</p></li>
                        <li><p>Olive oil - 3 tbsp</p></li>
                        <li><p>Pinch of red pepper flakes</p></li>
                        <li><p>Pinch of salt and pepper</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Mix all the sauces together in a large bowl</p></li>
                        <li><p>Chop the cilantro</p></li>
                        <li><p>Mix and serve on meat!</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
