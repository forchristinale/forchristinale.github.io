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
                <title>Pressure cooker chicken, lentil, and bacon stew</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Pressure cooker chicken, lentil, and bacon stew recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Pressure cooker chicken, lentil, and bacon stew
                    <span role="img" aria-label="emoji">
                        🍲
                    </span>
                </h1>
                <RecipeTags slug="pressure-cooker-chicken-lentil-stew" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 tablespoons extra-virgin olive oil, plus more for serving</p></li>
                        <li><p>8 ounces slab bacon or pancetta, cut into 1/2-inch pieces</p></li>
                        <li><p>1 medium onion, diced (about 1 cup)</p></li>
                        <li><p>2 medium carrots, peeled and roughly chopped</p></li>
                        <li><p>8 ounces dried French lentils, such as Le Puy</p></li>
                        <li><p>12 sprigs parsley: chop the leaves, tie the stems together with kitchen twine</p></li>
                        <li><p>2 bay leaves</p></li>
                        <li><p>2 1/2 pounds bone-in, skin-on chicken pieces (thighs and drumsticks are best)</p></li>
                        <li><p>1 quart low-sodium chicken stock</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>2 teaspoons sherry vinegar, plus more to taste</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Heat the oil in a pressure cooker over medium-high heat. Cook the bacon about 1 minute until starting to crisp, then the onion about 2 minutes until soft. Add the carrots, lentils, parsley stems, bay leaves, chicken and stock, season gently with salt and pepper, and stir</p></li>
                        <li><p>Seal and cook at high pressure for 20 minutes. Cool the cooker under cold running water (or use the quick release on an electric one) and open. Move the chicken to a bowl and discard the parsley stems. Cook the lentils over high heat, stirring, about 5 minutes until thick and stew-like. Meanwhile shred the chicken, discarding the bones and skin</p></li>
                        <li><p>Stir the chicken and vinegar into the lentils, season with salt and pepper, and stir in half the parsley. Serve with the remaining parsley, sherry vinegar and olive oil at the table</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
