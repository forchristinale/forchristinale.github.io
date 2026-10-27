import React from 'react';
import { Link } from 'gatsby';
import { getRecipe } from '../../data/recipes';

// Shows a recipe's tags as pills; each links to /recipes filtered by that tag.
const RecipeTags = ({ slug }) => {
  const recipe = getRecipe(slug);
  if (!recipe) return null;

  return (
    <div className="pill-row justify-content-center">
      {recipe.tags.map((tag) => (
        <Link key={tag} to={`/recipes?tag=${encodeURIComponent(tag)}`} className="pill">
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default RecipeTags;
