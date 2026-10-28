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
                <title>Spinach salad with beets and walnuts</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Spinach salad with beets and walnuts recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Spinach salad with beets and walnuts
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="spinach-beet-walnut-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 large beets, trimmed</p></li>
                        <li><p>8 ounces baby spinach</p></li>
                        <li><p>1/3 cup crumbled goat cheese</p></li>
                        <li><p>1/2 cup toasted walnuts</p></li>
                        <li><p>2 tablespoons extra-virgin olive oil</p></li>
                        <li><p>1 tablespoon red wine vinegar</p></li>
                        <li><p>Scant 1/2 teaspoon salt</p></li>
                        <li><p>1/4 teaspoon pepper</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Heat the oven to 425°F. Roast the beets on a baking sheet until fork tender, about 1 hour depending on size. When cool enough to handle, peel and roughly chop them</p></li>
                        <li><p>Put the spinach, beets, goat cheese and walnuts in a large bowl</p></li>
                        <li><p>Whisk the olive oil and vinegar, then whisk in the salt and pepper. Pour over the salad and toss</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
