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
                <title>Cabbage soup with cauliflower, chickpeas, and coconut milk</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Cabbage soup with cauliflower, chickpeas, and coconut milk recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Cabbage soup with cauliflower, chickpeas, and coconut milk
                    <span role="img" aria-label="emoji">
                        🍲
                    </span>
                </h1>
                <RecipeTags slug="chickpea-cabbage-soup" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 tablespoons extra-virgin olive oil</p></li>
                        <li><p>1 medium yellow onion, diced</p></li>
                        <li><p>2 medium carrots, peeled and thinly sliced</p></li>
                        <li><p>4 cloves garlic, minced</p></li>
                        <li><p>1 (1 1/2-inch) piece fresh ginger, peeled and finely chopped</p></li>
                        <li><p>1 teaspoon ground cumin</p></li>
                        <li><p>1 teaspoon black pepper</p></li>
                        <li><p>1/2 teaspoon ground turmeric</p></li>
                        <li><p>1/2 teaspoon smoked paprika</p></li>
                        <li><p>1/2 head green cabbage (about 2 pounds), cut into 3/4-inch pieces</p></li>
                        <li><p>8 cups vegetable broth</p></li>
                        <li><p>1 (15-ounce) can chickpeas, rinsed and drained</p></li>
                        <li><p>1 (14.5-ounce) can diced tomatoes</p></li>
                        <li><p>10 ounces cauliflower, cut into 1-inch florets</p></li>
                        <li><p>1 tablespoon Diamond Crystal kosher salt (use half as much table salt)</p></li>
                        <li><p>1 (13.5-ounce) can unsweetened full-fat coconut milk, shaken</p></li>
                        <li><p>Chopped fresh cilantro and lime wedges, for serving</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Heat the oil in a large Dutch oven over medium-high heat. Cook the onion and carrots for 3 to 5 minutes until softened. Stir in the garlic, ginger, cumin, pepper, turmeric and smoked paprika for about 1 minute. Add the cabbage and cook, stirring, about 2 minutes until bright green</p></li>
                        <li><p>Add the broth, chickpeas, tomatoes, cauliflower and salt. Bring to a boil, then simmer, stirring occasionally, 25 to 30 minutes until the cabbage and cauliflower are tender</p></li>
                        <li><p>Stir in the coconut milk and simmer about 2 minutes until warmed through. Serve topped with cilantro and lime wedges</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
