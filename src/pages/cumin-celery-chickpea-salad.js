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
                <title>Make-ahead chickpea salad with cumin and celery</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Make-ahead chickpea salad with cumin and celery recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Make-ahead chickpea salad with cumin and celery
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="cumin-celery-chickpea-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>1/2 pound dried chickpeas, soaked overnight in cold salted water</p></li>
                        <li><p>1 bay leaf</p></li>
                        <li><p>1 carrot, cut into 3-inch pieces</p></li>
                        <li><p>1 onion, halved</p></li>
                        <li><p>2 stalks celery: slice one thinly, cut the other into 3-inch pieces</p></li>
                        <li><p>Kosher salt</p></li>
                        <li><p>1/2 teaspoon ground cumin</p></li>
                        <li><p>2 tablespoons white wine vinegar</p></li>
                        <li><p>6 tablespoons extra-virgin olive oil</p></li>
                        <li><p>1 small shallot, thinly sliced</p></li>
                        <li><p>1/2 cup roughly chopped fresh parsley</p></li>
                        <li><p>Black pepper</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Drain the chickpeas and put them in a large pot with the bay leaf, carrot, onion and the celery pieces. Cover with 2 inches of cold water, salt it, bring to a boil, then simmer for about 1 hour until tender but still holding their shape</p></li>
                        <li><p>Throw out the bay leaf, carrot, onion and celery. Drain the chickpeas and rinse under cold water until chilled</p></li>
                        <li><p>In a large bowl, mix the cumin and vinegar, then slowly whisk in the olive oil. Add the shallot, sliced celery, parsley and chickpeas and toss. Season with salt and pepper</p></li>
                        <li><p>Serve right away, or better, let it sit overnight in the fridge. It keeps for up to 3 days</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
