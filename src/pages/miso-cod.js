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
                <title>Miso-marinated cod</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Miso-marinated cod recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Miso-marinated cod 
                    <span role="img" aria-label="emoji">
                        🐟
                    </span>
                </h1>
                <RecipeTags slug="miso-cod" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Marinade</p>
                    <ul>
                        <li><p>1/4 cup red or white miso paste</p></li>
                        <li><p>1/4 cup sake</p></li>
                        <li><p>2 tablespoons mirin</p></li>
                        <li><p>2 teaspoons soy sauce</p></li>
                        <li><p>1 tablespoon vegetable oil</p></li>
                        <li><p>1/4 cup sugar</p></li>
                    </ul>
                    <br/>
                    <p>Fish</p>
                    <ul>
                        <li><p>4 cod fillets, 5 to 6 ounces each</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Whisk the miso, sake, mirin, soy sauce, oil, and sugar together</p></li>
                        <li><p>Rub the marinade over every surface of the cod fillets, then put them in a zipper-lock bag or sealable container</p></li>
                        <li><p>Marinate for at least 30 minutes, up to 2 days (the longer the better for flavor)</p></li>
                        <li><p>Move the oven rack to about 4 inches from the broiler and preheat the broiler to high. Cover a small broiler pan with aluminum foil</p></li>
                        <li><p>Place the fillets on the pan and broil until the top is well charred and the fish is opaque and flakes easily, about 8-10 minutes depending on thickness. Cod is leaner than black cod, so start checking around 7 minutes</p></li>
                        <li><p>If any spots start to burn, cover them with small pieces of aluminum foil</p></li>
                        <li><p>Serve right away 😺</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
