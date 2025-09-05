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
                <title>Chives (for steak)</title>
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
                    Chives (for steak)
                    <span role="img" aria-label="emoji">
                        🌿
                    </span>
                </h1>
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>One bundle of asian chives</p></li>
                        <li><p>Fish sauce - 2 tbsp</p></li>
                        <li><p>Sugar - 1 tbsp</p></li>
                        <li><p>Minced garlic - 1 tbsp</p></li>
                        <li><p>Soy sauce - 0.5 tbsp</p></li>
                        <li><p>Plum sauce - 1 tbsp (optional)</p></li>
                        <li><p>Sesame oil - 2 tbsp</p></li>
                        <li><p>Sesame seeds - 1 tbsp</p></li>
                        <li><p>Hot pepper flakes - 2 tbsp</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Mix all the sauces together in a large bowl</p></li>
                        <li><p>Chop the chives into 2-3 in pieces</p></li>
                        <li><p>Mix and serve on meat!</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
