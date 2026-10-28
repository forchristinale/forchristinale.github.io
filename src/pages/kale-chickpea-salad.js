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
                <title>Marinated kale and chickpea salad with sumac onions</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Marinated kale and chickpea salad with sumac onions recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Marinated kale and chickpea salad with sumac onions
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="kale-chickpea-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>1 bunch kale (about 1 pound), tough stems removed, leaves torn</p></li>
                        <li><p>2 tablespoons olive oil</p></li>
                        <li><p>Kosher salt</p></li>
                        <li><p>1 small red onion, thinly sliced</p></li>
                        <li><p>1 teaspoon ground sumac</p></li>
                        <li><p>1/2 teaspoon toasted sesame seeds</p></li>
                        <li><p>1 tablespoon lemon juice (1 lemon)</p></li>
                        <li><p>1 clove garlic, grated</p></li>
                        <li><p>2 teaspoons dijon mustard</p></li>
                        <li><p>1 (14-ounce) can chickpeas or white beans, drained and rinsed</p></li>
                        <li><p>Black pepper</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Toss the kale with the olive oil and 1 teaspoon salt in a large bowl. Let it sit at room temperature for about 1 hour until lightly wilted</p></li>
                        <li><p>Meanwhile, cover the onion with cold water for 15 minutes, rinse well, and dry it (a salad spinner lined with paper towels works). Mix with the sumac and sesame seeds and salt to taste</p></li>
                        <li><p>Mix the lemon juice, garlic and mustard. Toss the kale with this and the chickpeas, season with salt and pepper, and top with the sumac onions</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
