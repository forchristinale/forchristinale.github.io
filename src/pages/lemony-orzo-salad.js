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
                <title>Lemony orzo pasta salad</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Lemony orzo pasta salad recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Lemony orzo pasta salad
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="lemony-orzo-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 tablespoons balsamic vinegar</p></li>
                        <li><p>1/4 teaspoon lemon zest and 2 tablespoons lemon juice</p></li>
                        <li><p>1 clove garlic, minced</p></li>
                        <li><p>2 1/2 teaspoons kosher salt, divided</p></li>
                        <li><p>1/2 teaspoon black pepper</p></li>
                        <li><p>6 tablespoons extra-virgin olive oil, plus more for drizzling</p></li>
                        <li><p>12 ounces dried orzo</p></li>
                        <li><p>1 ounce Parmigiano-Reggiano, finely grated (1/2 cup)</p></li>
                        <li><p>1/2 small head radicchio, cored and very finely diced</p></li>
                        <li><p>1 (15-ounce) can chickpeas, drained and rinsed</p></li>
                        <li><p>1/2 cup chopped fresh basil</p></li>
                        <li><p>1/4 cup chopped pickled mild banana pepper rings</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Whisk the vinegar, lemon juice and zest, garlic, 1/2 teaspoon salt and the pepper in a large bowl. Slowly whisk in the oil</p></li>
                        <li><p>Boil 2 quarts of water, add the orzo and the remaining 2 teaspoons salt, and cook, stirring often, about 2 minutes past al dente. Drain, spread on a baking sheet, toss with 2 tablespoons of the dressing, and let cool completely, about 15 minutes</p></li>
                        <li><p>Add the cheese, radicchio, chickpeas, basil, banana peppers and cooled orzo to the bowl with the dressing and toss. Season with salt and pepper</p></li>
                        <li><p>Let sit at room temperature for 30 minutes, then serve drizzled with olive oil (or refrigerate for later)</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
