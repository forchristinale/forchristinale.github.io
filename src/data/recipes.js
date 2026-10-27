// Add new recipes here. `slug` is the page path (src/pages/<slug>.js),
// and `tags` become the filter pills on /recipes and on the recipe page itself.
export const recipes = [
  {
    slug: 'biryani',
    title: 'Chicken biryani',
    emoji: '🍗',
    tags: ['chicken', 'indian', 'rice'],
  },
  {
    slug: 'chives',
    title: 'Chives (with steak)',
    emoji: '🌿',
    tags: ['beef', 'korean', 'sauce'],
  },
  {
    slug: 'chimichurri',
    title: 'Chimichurri',
    emoji: '🌿',
    tags: ['beef', 'argentinian', 'sauce'],
  },
];

export const getRecipe = (slug) => recipes.find((r) => r.slug === slug);
