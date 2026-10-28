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
                <title>French lentils with garlic and herbs</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="French lentils with garlic and herbs recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    French lentils with garlic and herbs
                    <span role="img" aria-label="emoji">
                        🌿
                    </span>
                </h1>
                <RecipeTags slug="french-lentils" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Lentils</p>
                    <ul>
                        <li><p>1 cup (7 ounces) French Le Puy lentils, picked over for stones</p></li>
                        <li><p>1 medium carrot, peeled</p></li>
                        <li><p>1 medium yellow onion, halved through the root</p></li>
                        <li><p>1 medium rib celery</p></li>
                        <li><p>2 medium cloves garlic</p></li>
                        <li><p>2 or 3 sprigs rosemary, thyme or sage (or a mix)</p></li>
                        <li><p>Kosher salt</p></li>
                    </ul>
                    <br/>
                    <p>To finish</p>
                    <ul>
                        <li><p>2 tablespoons unsalted butter</p></li>
                        <li><p>1/2 pound very finely diced shallot, carrot, celery and turnip mix</p></li>
                        <li><p>Red wine vinegar, to taste</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>Small handful minced flat-leaf parsley</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Put the lentils, carrot, onion and celery in a large saucepan. Tie the garlic and herbs in a cheesecloth sachet and add it. Cover with at least 2 inches of water and salt generously (it should taste as salty as you like your food). Bring to a simmer over medium heat</p></li>
                        <li><p>Lower the heat to a bare simmer and cook until the lentils are just tender, about 25 minutes (start checking at 15). Add a handful of ice cubes or a splash of cold water to stop the cooking. Throw out the carrot, onion, celery and herb sachet (the lentils can sit in their liquid in the fridge up to 2 days)</p></li>
                        <li><p>In a large saucepan, melt the butter over medium heat until foaming. Cook the diced vegetables about 2 minutes until barely tender. Add the drained lentils and about 1/4 cup of their cooking liquid, bring to a simmer, and cook until the lentils are heated through and coated in a creamy glaze</p></li>
                        <li><p>Add vinegar 1 teaspoon at a time until it tastes bright (a light tang, not sour). Season with salt and pepper, stir in the parsley, and serve warm</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
