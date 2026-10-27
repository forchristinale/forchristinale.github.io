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
                <title>Chinese eggplant</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Chinese eggplant recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chinese eggplant 
                    <span role="img" aria-label="emoji">
                        🍆
                    </span>
                </h1>
                <RecipeTags slug="chinese-eggplant" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 small Chinese long eggplants (10 oz / 300 g each), chopped into bite-size pieces</p></li>
                        <li><p>1 teaspoon salt</p></li>
                        <li><p>1 tablespoon cornstarch</p></li>
                    </ul>
                    <br/>
                    <p>Sauce</p>
                    <ul>
                        <li><p>1 tablespoon light soy sauce (or regular soy sauce)</p></li>
                        <li><p>1 tablespoon water</p></li>
                        <li><p>1/2 teaspoon dark soy sauce</p></li>
                        <li><p>2 teaspoons sugar</p></li>
                        <li><p>1 teaspoon cornstarch</p></li>
                    </ul>
                    <br/>
                    <p>Stir-fry</p>
                    <ul>
                        <li><p>2 1/2 tablespoons peanut oil (or vegetable oil)</p></li>
                        <li><p>1 teaspoon minced ginger</p></li>
                        <li><p>3 cloves garlic, chopped</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Salt the eggplant, using one of two ways. Option 1: put the eggplant in a large bowl, cover with water, add 1 teaspoon salt and mix. Put a pot lid on top to keep the eggplant under water for 15 minutes, then drain and pat dry. Option 2: spread the eggplant on a paper towel, sprinkle kosher salt on both sides, and let it rest for 45-60 minutes, then pat dry without rinsing</p></li>
                        <li><p>Mix all the sauce ingredients together in a small bowl</p></li>
                        <li><p>Sprinkle the eggplant with 1 tablespoon cornstarch and mix by hand until evenly coated in a thin layer</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
