import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
    const { lang } = headData;

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Chicken biryani</title>
                <html lang={lang || 'en'} />
                <meta name="description" content="Page not found" />
            </Helmet>
            <br />
            <br />
            <br />
            <p><a href="/">Home</a></p>
            <br />
            <Container>
                <h1 className="hero-title text-center">
                    Chicken biryani 
                    <span role="img" aria-label="emoji">
                        🍗
                    </span>
                </h1>
                <div className="text-left">
                    <h2><u>Ingredients</u></h2>
                    <p>Chicken marinade</p>
                    <ul>
                        <li><p>4 chicken thighs</p></li>
                        <li><p>3/4 cup yogurt (can be greek or plain)</p></li>
                        <li><p>1/4 cup tomato puree/paste</p></li>
                        <li><p>1/4 cup veggie oil</p></li>
                        <li><p>1 tablespoon ginger and garlic paste (just half and half)</p></li>
                        <li><p>1 tablespoon of red/normal chili powder</p></li>
                        <li><p>1 teaspoon of tumeric powder</p></li>
                        <li><p>1 teaspoon of garam masala powder</p></li>
                        <li><p>1 1/4 teaspoon of garam masala powder</p></li>
                    </ul>
                    <br />
                    <p>70% cooked (parboiled rice)</p>
                    <ul>
                        <li><p>2 cups basmati rice</p></li>
                        <li><p>6 cups water</p></li>
                        <li><p>2 tablespoons of salt</p></li>
                        <li><p>1 bayleaf</p></li>
                        <li><p>6 cloves</p></li>
                        <li><p>3 cardamom pods</p></li>
                    </ul>
                    <br/>
                    <p>Other things (all optional)</p>
                    <ul>
                        <li><p>1 tablespoon of butter or ghee</p></li>
                        <li><p>1 cup of cilantro</p></li>
                        <li><p>Crispy onions</p></li>
                        <li><p>1 cup of mint leaves</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <p>Recipe</p>
                    <ol>
                        <li><p>Mix the chicken marinade into the bowl and mix. Then throw the chicken into the marinade and mix! Let it marinade for at least 1 hour, up to 24 hours</p></li>
                        <li><p>Once all marinated, heat a large pot (ideally heavy bottomed pot) to medium/high heat, then throw in the chicken</p></li>
                        <li><p>Cook the chicken for 4 minutes, then flip the chicken over and cook for 3 minutes on the other side</p></li>
                        <li><p>While the chicken is cooking, bring 6 cups of water to a boil, then throw in the rice and whole spices. Let it cook for 5 minutes. The rice will cook to about 70%, should still be raw in the middle when you press on the rice with your finger</p></li>
                        <li><p>Once the chicken is at the 7 minute mark of cooking (4 min + 3 min), throw the rice on top of the chicken (and optionally: throw some crispy onions, cilantro, mint leaves, butter on top)</p></li>
                        <li><p>Cook and <b>cover</b> it on low heat for 20 minutes, so the pot can steam and let the chicken get tender and rice become fully cooked</p></li>
                        <li><p>(Optional: throw some brown onions on top) </p></li>
                        <li><p>Let it rest for 5 minutes, then enjoy 😺 </p></li>
                    </ol>
                </div>

            </Container>
        </>
    );
};
