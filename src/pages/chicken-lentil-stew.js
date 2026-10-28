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
                <title>Chicken and lentil stew with tomatoes and onions</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Chicken and lentil stew with tomatoes and onions recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chicken and lentil stew with tomatoes and onions
                    <span role="img" aria-label="emoji">
                        🍲
                    </span>
                </h1>
                <RecipeTags slug="chicken-lentil-stew" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Chicken and lentils</p>
                    <ul>
                        <li><p>1 whole chicken (about 3 1/2 pounds)</p></li>
                        <li><p>1 tablespoon kosher salt, plus more for seasoning</p></li>
                        <li><p>1/2 cup extra-virgin olive oil, plus more for drizzling</p></li>
                        <li><p>4 medium cloves garlic, minced</p></li>
                        <li><p>1-inch knob fresh ginger, peeled and minced</p></li>
                        <li><p>1 tablespoon ground coriander</p></li>
                        <li><p>2 teaspoons ground cumin</p></li>
                        <li><p>1 teaspoon ground turmeric</p></li>
                        <li><p>1 teaspoon paprika</p></li>
                        <li><p>1 teaspoon black pepper</p></li>
                        <li><p>Large pinch red pepper flakes</p></li>
                        <li><p>1 1/2 pounds green, French green (Le Puy) or yellow lentils</p></li>
                        <li><p>1 bay leaf</p></li>
                    </ul>
                    <br/>
                    <p>Tomato-onion topping</p>
                    <ul>
                        <li><p>1/2 cup extra-virgin olive oil</p></li>
                        <li><p>2 large yellow onions, sliced 1/2 inch thick</p></li>
                        <li><p>1 pound plum tomatoes, cut into 1-inch pieces</p></li>
                        <li><p>2 tablespoons minced fresh dill or cilantro</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Put the chicken in a large pot or Dutch oven, cover with water, and add 1 tablespoon salt. Heat to just under a simmer (about 180°F) and cook, holding it there, until the thigh reads 160°F, about 45 minutes</p></li>
                        <li><p>Lift the chicken out, letting it drain back into the pot, and let it cool. Save the poaching liquid and clean the pot</p></li>
                        <li><p>In the same pot, combine 1/2 cup oil with the garlic and ginger over medium heat and cook about 2 minutes until just starting to turn golden. Lower the heat to medium-low, add the coriander, cumin, turmeric, paprika, black pepper and red pepper flakes, and stir 2 to 3 minutes until toasty and fragrant</p></li>
                        <li><p>Stir in the lentils and add enough poaching liquid to just cover them, plus the bay leaf. Simmer, adding more liquid (or water) as needed to keep the lentils covered, about 1 hour until very tender and starting to break down</p></li>
                        <li><p>Meanwhile, skin the chicken (you can finely mince the skin and add it to the lentils for richness) and shred the meat, discarding the bones</p></li>
                        <li><p>Stir the shredded chicken into the lentils and cook about 15 minutes more, stirring often and adding liquid as needed so it does not get too thick. Remove the bay leaf, season with salt, and keep warm</p></li>
                        <li><p>In a large skillet, heat 1/2 cup oil over high heat until very lightly smoking. Cook the onions with salt, stirring often, about 15 minutes until deeply browned in spots and softening (lower the heat if needed). Add the tomatoes and cook about 7 minutes until they start to break down. Off the heat, stir in the dill or cilantro and season with salt</p></li>
                        <li><p>Ladle the lentils into bowls, top with the onion-tomato mix, drizzle with olive oil, and serve</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
