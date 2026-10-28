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
                <title>Bengali rice porridge with lentils and chicken</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Bengali rice porridge with lentils and chicken recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Bengali rice porridge with lentils and chicken
                    <span role="img" aria-label="emoji">
                        🍲
                    </span>
                </h1>
                <RecipeTags slug="bengali-lentil-porridge" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Porridge</p>
                    <ul>
                        <li><p>3/4 cup jasmine rice</p></li>
                        <li><p>1 inch fresh turmeric (or 1 teaspoon dried turmeric)</p></li>
                        <li><p>1 inch fresh ginger</p></li>
                        <li><p>2 tablespoons unsalted butter or ghee</p></li>
                        <li><p>1/2 teaspoon Kashmiri red chile powder (or 1/4 teaspoon cayenne)</p></li>
                        <li><p>1/4 cup red lentils, sorted and rinsed</p></li>
                        <li><p>6 cups chicken stock</p></li>
                        <li><p>Kosher salt and black pepper</p></li>
                        <li><p>1 medium russet potato, peeled and diced into 1/2-inch pieces</p></li>
                        <li><p>2 chicken thighs (about 8 ounces)</p></li>
                    </ul>
                    <br/>
                    <p>Cilantro chutney and garnish</p>
                    <ul>
                        <li><p>1/2 bunch cilantro, finely chopped</p></li>
                        <li><p>2 Thai green chiles, finely chopped</p></li>
                        <li><p>2 tablespoons lime juice (2 limes)</p></li>
                        <li><p>2 tablespoons mustard oil</p></li>
                        <li><p>Crispy fried shallots, for garnish</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Rinse the rice in cold water until it runs clear, then cover with fresh cold water and let it soak</p></li>
                        <li><p>Peel the turmeric (if fresh) and ginger with a spoon and cut into thin coins, then thin matchsticks</p></li>
                        <li><p>Drain the rice and crush it lightly with a muddler, rolling pin or pestle so it breaks into uneven pieces, from cornmeal-sized to cracked grains</p></li>
                        <li><p>Melt the butter in a 4-quart saucepan over medium heat until foamy. Cook the turmeric, ginger and chile about 2 minutes until fragrant. Add the rice, lentils and stock, season with salt and pepper, bring to a boil, then lower to a bare simmer. Cook uncovered about 30 minutes until the rice and lentils are tender</p></li>
                        <li><p>Add the potato and chicken thighs and cook gently, stirring occasionally, about 30 minutes until the potato is tender, the chicken is cooked and the porridge has thickened</p></li>
                        <li><p>Meanwhile, mix the cilantro, green chiles, lime juice and mustard oil for the chutney and season with salt</p></li>
                        <li><p>Take the chicken out, dice it into 1/2-inch pieces when cool enough to handle, and stir it back in. Season with salt and pepper and add water if it gets too thick</p></li>
                        <li><p>Pour into bowls and top with the chutney and crispy fried shallots</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
