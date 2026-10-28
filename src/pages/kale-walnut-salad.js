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
                <title>Kale salad with toasted walnuts</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Kale salad with toasted walnuts recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Kale salad with toasted walnuts
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="kale-walnut-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Salad</p>
                    <ul>
                        <li><p>12 ounces kale leaves, hard ribs removed and leaves cut into large pieces</p></li>
                        <li><p>Extra-virgin olive oil, for massaging the kale</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>1 1/4 cups walnut halves (about 4 ounces)</p></li>
                    </ul>
                    <br/>
                    <p>Simple vinaigrette</p>
                    <ul>
                        <li><p>3 tablespoons extra-virgin olive oil</p></li>
                        <li><p>1 tablespoon red wine vinegar</p></li>
                        <li><p>Pinch of salt and pepper</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Drizzle the kale with just enough olive oil to coat lightly, season with salt, and massage it with your hands for about 2 minutes, getting every surface and working the tough pieces until they soften</p></li>
                        <li><p>Toast the walnuts in a medium skillet over medium-high heat, tossing often, about 3 minutes until lightly toasted. Let cool, then crumble roughly with your hands</p></li>
                        <li><p>Whisk the vinaigrette ingredients together</p></li>
                        <li><p>Toss the kale with the walnuts and just enough vinaigrette to coat lightly. Season with salt and pepper and add more vinaigrette if you like</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
