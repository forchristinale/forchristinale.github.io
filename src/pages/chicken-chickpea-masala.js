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
                <title>Pressure cooker chicken and chickpea masala</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Pressure cooker chicken and chickpea masala recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Pressure cooker chicken and chickpea masala
                    <span role="img" aria-label="emoji">
                        🍛
                    </span>
                </h1>
                <RecipeTags slug="chicken-chickpea-masala" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <ul>
                        <li><p>2 tablespoons unsalted butter</p></li>
                        <li><p>1 medium onion, finely diced</p></li>
                        <li><p>4 cloves garlic, minced</p></li>
                        <li><p>1 tablespoon grated fresh ginger</p></li>
                        <li><p>1 tablespoon ground cumin</p></li>
                        <li><p>1 1/2 teaspoons paprika</p></li>
                        <li><p>1 1/2 teaspoons ground coriander</p></li>
                        <li><p>1 teaspoon ground turmeric</p></li>
                        <li><p>1/4 teaspoon cayenne pepper (more or less to taste)</p></li>
                        <li><p>1/2 teaspoon ground black pepper</p></li>
                        <li><p>1 (15-ounce) can crushed tomatoes</p></li>
                        <li><p>1 pound fresh spinach leaves, trimmed</p></li>
                        <li><p>1/4 cup lemon juice (2 to 3 lemons), divided</p></li>
                        <li><p>1/2 cup chopped fresh cilantro, divided</p></li>
                        <li><p>3 pounds chicken drumsticks and thighs (4 to 6 of each)</p></li>
                        <li><p>1/2 cup low-sodium chicken stock</p></li>
                        <li><p>2 (15-ounce) cans chickpeas, drained</p></li>
                        <li><p>1/2 cup heavy cream</p></li>
                        <li><p>Kosher salt</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Melt the butter in a pressure cooker over medium-high heat (sear setting on an electric one). Cook the onion, garlic and ginger, stirring often, until pale brown, about 5 minutes. Add the cumin, paprika, coriander, turmeric, cayenne and black pepper and stir for about 30 seconds until fragrant. Add the crushed tomatoes and spinach, cover, and cook about 2 minutes until the spinach wilts</p></li>
                        <li><p>Add half the cilantro, the chicken stock and the chicken. Seal and cook at high pressure for 15 minutes</p></li>
                        <li><p>Let it cool and release the pressure. Open, then stir in the cream, chickpeas and 2 tablespoons lemon juice and simmer, stirring often, until the sauce thickens. Stir in the rest of the lemon juice, season with salt, and serve topped with the remaining cilantro</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
