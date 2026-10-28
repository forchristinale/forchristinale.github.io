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
                <title>Winter green salad with walnuts, apples, and parmesan-anchovy dressing</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Winter green salad with walnuts, apples, and parmesan-anchovy dressing recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Winter green salad with walnuts, apples, and parmesan-anchovy dressing
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="winter-green-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Dressing</p>
                    <ul>
                        <li><p>1/2 cup mayonnaise</p></li>
                        <li><p>1 ounce finely grated parmesan</p></li>
                        <li><p>6 whole anchovy fillets, mashed into a paste with the back of a fork</p></li>
                        <li><p>2 teaspoons lemon juice (from 1 lemon)</p></li>
                        <li><p>1 teaspoon Worcestershire sauce</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                    </ul>
                    <br/>
                    <p>Salad</p>
                    <ul>
                        <li><p>2 Belgian endives, core removed, leaves cut into thin slivers</p></li>
                        <li><p>1 head radicchio, finely sliced</p></li>
                        <li><p>1 quart loosely packed frisée fronds, pale green and yellow parts only (about 2 heads)</p></li>
                        <li><p>1 large tart apple such as Fuji or Granny Smith, cut into thin matchsticks</p></li>
                        <li><p>1/4 cup chopped fresh parsley</p></li>
                        <li><p>2 cups toasted walnuts</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Whisk the mayonnaise, parmesan, mashed anchovy, lemon juice and Worcestershire in a medium bowl. Season with salt and pepper</p></li>
                        <li><p>Toss the endive, radicchio, frisée, apple and parsley with dressing to taste and season with salt and pepper. Add the walnuts, toss briefly, and serve right away</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
