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
                <title>One-skillet crispy salmon with mustardy lentils</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="One-skillet crispy salmon with mustardy lentils recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    One-skillet crispy salmon with mustardy lentils
                    <span role="img" aria-label="emoji">
                        🐟
                    </span>
                </h1>
                <RecipeTags slug="salmon-mustard-lentils" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 tablespoons extra-virgin olive oil, divided, plus more for serving</p></li>
                        <li><p>4 medium shallots, thinly sliced (about 1/2 cup)</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>2 salmon fillets, 6 ounces each, skin on</p></li>
                        <li><p>1 (14.5-ounce) can Puy lentils, drained and rinsed</p></li>
                        <li><p>3 sprigs thyme or 1 sprig rosemary</p></li>
                        <li><p>1 cup low-sodium vegetable or chicken stock</p></li>
                        <li><p>1 tablespoon whole-grain mustard</p></li>
                        <li><p>1 tablespoon chopped flat-leaf parsley</p></li>
                        <li><p>1 teaspoon lemon juice</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Heat 1 tablespoon oil in a medium nonstick skillet over medium-high heat. Cook the shallots, stirring often, until very soft and browned, about 15 minutes (lower the heat if they start to burn). Season with salt and pepper, set aside, and wipe out the skillet</p></li>
                        <li><p>Pat the salmon very dry and season with salt and pepper. Heat the other tablespoon of oil over medium-high heat, add the salmon skin side down, and immediately turn the heat to medium-low. Press gently on the fillets and cook about 6 minutes until the skin is crisp and lifts easily. Flip and cook about 1 minute more (120°F inside for medium-rare, 130°F for medium). Rest on a paper towel</p></li>
                        <li><p>Add the lentils, thyme or rosemary, stock, mustard and caramelized shallots to the skillet and bring to a boil. Simmer over medium heat until the liquid reduces by about half, about 5 minutes. Off the heat, stir in the parsley and lemon juice and season with salt and pepper</p></li>
                        <li><p>Spoon the lentils onto plates, set the salmon on top, drizzle with olive oil, and serve right away</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
