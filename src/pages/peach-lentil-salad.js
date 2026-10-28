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
                <title>Thai-inspired peach and lentil salad with lemongrass dressing</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Thai-inspired peach and lentil salad with lemongrass dressing recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Thai-inspired peach and lentil salad with lemongrass dressing
                    <span role="img" aria-label="emoji">
                        🍑
                    </span>
                </h1>
                <RecipeTags slug="peach-lentil-salad" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Dressing</p>
                    <ul>
                        <li><p>2 stalks lemongrass, tough outer layers removed and tender inner cores finely chopped (about 2 tablespoons)</p></li>
                        <li><p>3 tablespoons grated fresh ginger</p></li>
                        <li><p>2 medium cloves garlic, chopped</p></li>
                        <li><p>1 small red or green chile pepper, stemmed and chopped</p></li>
                        <li><p>1/4 cup lime juice (2 limes)</p></li>
                        <li><p>2 tablespoons rice vinegar</p></li>
                        <li><p>3 tablespoons fish sauce</p></li>
                        <li><p>2 tablespoons palm sugar or light brown sugar</p></li>
                        <li><p>3 tablespoons extra-virgin olive oil</p></li>
                    </ul>
                    <br/>
                    <p>Salad</p>
                    <ul>
                        <li><p>1 1/2 cups French green (Puy) lentils, rinsed</p></li>
                        <li><p>4 1/2 teaspoons Diamond Crystal kosher salt (use half as much table salt), plus more to taste</p></li>
                        <li><p>2 ripe but firm peaches, pitted and cut into wedges</p></li>
                        <li><p>1/3 cup loosely packed fresh mint leaves, roughly chopped</p></li>
                        <li><p>1/3 cup loosely packed fresh Thai or sweet basil leaves, roughly torn</p></li>
                        <li><p>1/3 cup loosely packed fresh cilantro leaves and tender stems, roughly chopped</p></li>
                        <li><p>1/3 cup fried shallots, plus more for serving</p></li>
                        <li><p>1 to 2 small red or green chile peppers, thinly sliced</p></li>
                        <li><p>More fresh mint and basil leaves, for serving</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Dressing: blend the lemongrass, ginger, garlic, chile, lime juice, rice vinegar, fish sauce, palm sugar and olive oil on high until the sugar dissolves and it is smooth, about 1 minute</p></li>
                        <li><p>Cover the lentils with about 2 inches of cold water in a medium saucepan, add the salt, and bring to a boil. Lower to a gentle simmer and cook 15 to 18 minutes until tender but still holding their shape. Drain well</p></li>
                        <li><p>Toss the warm lentils with 3/4 cup of the dressing in a large bowl and let stand 15 to 30 minutes, stirring now and then, so they soak it up</p></li>
                        <li><p>Gently toss in the peaches, mint, basil, cilantro and fried shallots. Add more dressing to taste (save any extra for another use) and season with salt</p></li>
                        <li><p>Move to a platter and top with sliced chiles, mint, basil and fried shallots</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
