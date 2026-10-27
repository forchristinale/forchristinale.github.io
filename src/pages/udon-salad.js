import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import RecipeTags from '../components/RecipeTags/RecipeTags';
import '../style/main.scss';

export default () => {
    const { lang } = headData;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Udon salad</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Udon salad recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Udon salad 우동 샐러드
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="udon-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Dressing</p>
                    <ul>
                        <li><p>Soy sauce - 3 tbsp</p></li>
                        <li><p>Sugar - 2 tbsp</p></li>
                        <li><p>Vinegar - 2 tbsp</p></li>
                        <li><p>Olive oil - 1 tbsp</p></li>
                        <li><p>Oyster sauce - 1 tbsp</p></li>
                        <li><p>Sesame oil - 1 tbsp</p></li>
                        <li><p>Minced garlic - 1/2 tbsp</p></li>
                    </ul>
                    <br/>
                    <p>Salad</p>
                    <ul>
                        <li><p>Udon noodles</p></li>
                        <li><p>Spring mix, cherry tomatoes, cucumber, or any other vegetables you like</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Cook the udon noodles and rinse them with cold water</p></li>
                        <li><p>Mix the dressing ingredients together</p></li>
                        <li><p>Mix the udon noodles, vegetables, and dressing together</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
