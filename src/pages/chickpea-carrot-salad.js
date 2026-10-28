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
                <title>Chickpea and carrot salad with raisins and almonds</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Chickpea and carrot salad with raisins and almonds recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chickpea and carrot salad with raisins and almonds
                    <span role="img" aria-label="emoji">
                        🥕
                    </span>
                </h1>
                <RecipeTags slug="chickpea-carrot-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 (15-ounce) cans chickpeas, drained and rinsed</p></li>
                        <li><p>1/2 cup golden raisins</p></li>
                        <li><p>1/4 cup extra-virgin olive oil</p></li>
                        <li><p>2 tablespoons lime juice (1 lime)</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>1/4 teaspoon smoked paprika</p></li>
                        <li><p>Pinch of cayenne</p></li>
                        <li><p>3 medium carrots, peeled and shredded on the large holes of a box grater</p></li>
                        <li><p>1/4 cup chopped fresh mint, dill, parsley or cilantro</p></li>
                        <li><p>1 scallion, minced (or 1 tablespoon minced chives)</p></li>
                        <li><p>1/4 cup sliced almonds, toasted</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Warm the chickpeas and raisins in a saucepan over medium heat, stirring, for 3 to 5 minutes (or microwave about 90 seconds). Move to a large bowl and stir in the carrots, oil, lime juice, 3/4 teaspoon salt, 1/4 teaspoon pepper, smoked paprika and cayenne. Let sit 15 to 30 minutes (can be kept in the fridge up to 3 days at this point)</p></li>
                        <li><p>Right before serving, stir in the herbs, scallion and almonds. Season with salt and pepper</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
