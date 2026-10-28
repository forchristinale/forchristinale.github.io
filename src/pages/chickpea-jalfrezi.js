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
                <title>Chickpea, potato, and spinach jalfrezi</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Chickpea, potato, and spinach jalfrezi recipe" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a> · <a href="/recipes">All recipes</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chickpea, potato, and spinach jalfrezi
                    <span role="img" aria-label="emoji">
                        🍛
                    </span>
                </h1>
                <RecipeTags slug="chickpea-jalfrezi" />
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Jalfrezi</p>
                    <ul>
                        <li><p>1 pound russet potatoes, peeled and cut into 1 1/2-inch chunks</p></li>
                        <li><p>Kosher salt</p></li>
                        <li><p>3 tablespoons vegetable oil</p></li>
                        <li><p>1 medium onion, grated on the large holes of a box grater</p></li>
                        <li><p>3 cloves garlic, grated</p></li>
                        <li><p>1 tablespoon ginger, grated</p></li>
                        <li><p>4 to 5 small green Thai bird chiles (or other green chiles)</p></li>
                        <li><p>1 small red pepper, finely diced</p></li>
                        <li><p>8 stems cilantro: roughly chop the leaves, finely mince the tender stems and keep them separate</p></li>
                        <li><p>1 teaspoon ground turmeric</p></li>
                        <li><p>1/2 teaspoon ground coriander</p></li>
                        <li><p>1/4 teaspoon ground cumin</p></li>
                        <li><p>1 teaspoon hot paprika</p></li>
                        <li><p>2 small plum tomatoes, peeled, seeded and chopped (canned is fine)</p></li>
                        <li><p>1 (15-ounce) can chickpeas, with their liquid</p></li>
                        <li><p>8 ounces curly spinach, roughly chopped</p></li>
                        <li><p>2 tablespoons lime juice (from 2 limes), divided</p></li>
                    </ul>
                    <br/>
                    <p>Cilantro chutney</p>
                    <ul>
                        <li><p>2 cups fresh cilantro leaves and tender stems</p></li>
                        <li><p>1 clove garlic</p></li>
                        <li><p>1 small green Thai bird chile</p></li>
                        <li><p>The rest of the lime juice</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Put the potatoes in a pot, cover with water by 1 inch, salt it, and simmer for about 10 minutes until tender but not falling apart. Drain</p></li>
                        <li><p>Heat the oil in a large heavy pot over medium-high heat. Cook the onion, garlic, ginger, chiles, cilantro stems and red pepper, stirring often, until most of the moisture is gone and it starts to brown, about 10 minutes. Add the turmeric, coriander, cumin and paprika and stir for 1 minute until fragrant</p></li>
                        <li><p>Add the tomatoes, chickpeas (with liquid), spinach, 1/2 cup water and the potatoes. Stir until the spinach wilts. Add half the lime juice, season with salt, then turn the heat to the lowest setting, cover, and keep warm</p></li>
                        <li><p>Chutney: blend the cilantro, garlic, chile, the rest of the lime juice and 1/3 cup water until smooth, adding more water if needed. Season with salt</p></li>
                        <li><p>Add a splash more water to the jalfrezi if it needs it and serve with the chutney and basmati rice or naan</p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
