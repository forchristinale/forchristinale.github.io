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
                <title>Roasted-chickpea and kale salad with sun-dried tomato vinaigrette</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Roasted-chickpea and kale salad with sun-dried tomato vinaigrette recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Roasted-chickpea and kale salad with sun-dried tomato vinaigrette
                    <span role="img" aria-label="emoji">
                        🥗
                    </span>
                </h1>
                <RecipeTags slug="roasted-chickpea-kale-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Salad</p>
                    <ul>
                        <li><p>1 (28-ounce) can chickpeas, rinsed and drained</p></li>
                        <li><p>1 tablespoon olive oil (for the chickpeas)</p></li>
                        <li><p>1/2 teaspoon ground cumin</p></li>
                        <li><p>1/2 teaspoon paprika</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>1 small bunch curly kale, trimmed and thinly sliced (about 1 quart)</p></li>
                        <li><p>1 tablespoon olive oil (for the kale)</p></li>
                        <li><p>1/2 cup pine nuts</p></li>
                        <li><p>1 cup fresh cilantro leaves, roughly chopped</p></li>
                        <li><p>1 cup fresh mint leaves, roughly chopped</p></li>
                    </ul>
                    <br/>
                    <p>Vinaigrette</p>
                    <ul>
                        <li><p>1/2 cup sun-dried tomatoes, thinly sliced</p></li>
                        <li><p>4 scallions, white and light green parts, thinly sliced</p></li>
                        <li><p>1 medium clove garlic, grated</p></li>
                        <li><p>2 tablespoons lemon juice and 1 teaspoon zest (from 1 lemon), plus more juice to taste</p></li>
                        <li><p>1/2 teaspoon hot sauce, such as Frank's</p></li>
                        <li><p>2 teaspoons sherry or red wine vinegar</p></li>
                        <li><p>3 tablespoons olive oil</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Heat the oven to 350°F with racks in the upper and lower-middle positions. Dry the chickpeas well by rolling them on a paper-towel-lined baking sheet, then toss in a bowl with 1 tablespoon oil, the cumin, paprika, salt and pepper. Spread on a foil-lined baking sheet and roast on the upper rack, shaking occasionally, for about 1 hour until dense and nutty</p></li>
                        <li><p>While they roast, massage the kale with 1 tablespoon oil, salt and pepper and set aside</p></li>
                        <li><p>Toast the pine nuts in a skillet on the lower rack, stirring occasionally, until deep golden brown, about 15 minutes</p></li>
                        <li><p>Mix the vinaigrette ingredients in a medium bowl with a fork and season with salt and pepper</p></li>
                        <li><p>Toss the cooled chickpeas with the kale, pine nuts, vinaigrette, cilantro and mint. Adjust the salt, pepper and lemon juice</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
