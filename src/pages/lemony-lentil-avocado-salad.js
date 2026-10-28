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
                <title>Lemony lentil salad with avocado and ricotta salata</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Lemony lentil salad with avocado and ricotta salata recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Lemony lentil salad with avocado and ricotta salata
                    <span role="img" aria-label="emoji">
                        🥑
                    </span>
                </h1>
                <RecipeTags slug="lemony-lentil-avocado-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>4 cups water</p></li>
                        <li><p>1 1/2 cups dried green lentils</p></li>
                        <li><p>2 teaspoons Diamond Crystal kosher salt, divided (use half as much table salt)</p></li>
                        <li><p>1 small red onion, chopped</p></li>
                        <li><p>1 teaspoon grated lemon zest plus 5 tablespoons lemon juice (3 lemons), divided</p></li>
                        <li><p>1 large clove garlic, minced</p></li>
                        <li><p>1 tablespoon Dijon mustard</p></li>
                        <li><p>1/4 teaspoon black pepper, plus more for serving</p></li>
                        <li><p>1/3 cup extra-virgin olive oil</p></li>
                        <li><p>3/4 cup chopped fresh parsley, plus more for serving</p></li>
                        <li><p>1/3 cup chopped fresh dill, plus more for serving</p></li>
                        <li><p>2 tablespoons chopped fresh mint</p></li>
                        <li><p>2 medium avocados, pitted, peeled and cut into 3/4-inch cubes</p></li>
                        <li><p>4 ounces ricotta salata, crumbled (about 1 cup)</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Bring the water to a boil in a large saucepan, stir in the lentils and 1 teaspoon salt, then simmer over medium-low heat 15 to 20 minutes until tender but still intact</p></li>
                        <li><p>In a large bowl, mix the red onion, 2 tablespoons lemon juice and 1/2 teaspoon salt and let stand about 20 minutes until bright pink</p></li>
                        <li><p>Add the lemon zest, garlic, mustard, pepper, the remaining 3 tablespoons lemon juice and the remaining 1/2 teaspoon salt to the onion and whisk. Gradually whisk in the olive oil</p></li>
                        <li><p>Drain the lentils well and toss them warm in the vinaigrette. Let stand, stirring occasionally, about 15 minutes until cooled, then fold in the parsley, dill and mint</p></li>
                        <li><p>Gently fold in the avocado and ricotta salata, move to a platter, and top with more parsley and dill</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
