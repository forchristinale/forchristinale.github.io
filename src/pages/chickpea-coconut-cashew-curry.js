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
                <title>Chickpea, coconut, and cashew curry</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Chickpea, coconut, and cashew curry recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chickpea, coconut, and cashew curry
                    <span role="img" aria-label="emoji">
                        🍛
                    </span>
                </h1>
                <RecipeTags slug="chickpea-coconut-cashew-curry" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Spice mix</p>
                    <ul>
                        <li><p>1 1/2 teaspoons whole cumin seeds, toasted</p></li>
                        <li><p>1 1/2 teaspoons coriander seeds, toasted</p></li>
                        <li><p>1 whole star anise, toasted</p></li>
                        <li><p>2 cloves</p></li>
                        <li><p>1/2 teaspoon black peppercorns, toasted</p></li>
                        <li><p>1/2 teaspoon ground cinnamon</p></li>
                        <li><p>1/4 teaspoon grated nutmeg</p></li>
                        <li><p>1 blade mace</p></li>
                        <li><p>1/2 teaspoon ground turmeric</p></li>
                        <li><p>1 black or green cardamom pod</p></li>
                    </ul>
                    <br/>
                    <p>Curry</p>
                    <ul>
                        <li><p>3 tablespoons vegetable oil, butter, or ghee</p></li>
                        <li><p>1 small onion, finely minced (about 1 cup)</p></li>
                        <li><p>4 cloves garlic, grated</p></li>
                        <li><p>1 tablespoon fresh ginger, grated</p></li>
                        <li><p>1 small red or green chili, finely chopped</p></li>
                        <li><p>1/4 teaspoon cayenne pepper</p></li>
                        <li><p>1/2 cup cashews</p></li>
                        <li><p>1 (14-ounce) can coconut milk</p></li>
                        <li><p>2 (14-ounce) cans chickpeas, drained and rinsed</p></li>
                        <li><p>1 bunch (about 3 ounces) flat spinach, trimmed and roughly chopped</p></li>
                        <li><p>Kosher salt</p></li>
                        <li><p>1/4 cup lime juice (3 to 4 limes)</p></li>
                        <li><p>1/2 cup chopped fresh cilantro</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Grind all the spice mix ingredients to a fine powder in a spice grinder and set aside</p></li>
                        <li><p>Heat the oil in a large saucepan over medium-high heat. Cook the onion, garlic, ginger and chili, stirring often and scraping the bottom, until golden brown and starting to burn in spots, about 10 minutes. Add the cayenne, cashews and half of the spice mix and stir for 30 seconds. Add the coconut milk, take it off the heat, and scrape up the browned bits</p></li>
                        <li><p>Blend the mixture until smooth, about 30 seconds (start slow and work up to high speed), and pour it back into the pot. Add the chickpeas, spinach and the rest of the spice mix and cook over low heat, stirring, about 10 minutes until the spinach wilts</p></li>
                        <li><p>Add salt and lime juice to taste and stir in half the cilantro. Serve with the rest of the cilantro and lime wedges, plus rice, naan or chutney if you like</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
