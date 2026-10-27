import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { headData } from '../mock/data';
import { recipes } from '../data/recipes';
import '../style/main.scss';

const byName = (a, b) => a.tag.localeCompare(b.tag);

export default () => {
  const { lang } = headData;
  const [selected, setSelected] = useState([]);
  const [sortBy, setSortBy] = useState('name'); // 'name' | 'count'
  const [query, setQuery] = useState('');
  const [picked, setPicked] = useState(null);

  // Support deep links like /recipes?tag=chicken (used by the pills on recipe pages)
  useEffect(() => {
    const tag = new URLSearchParams(window.location.search).get('tag');
    if (tag) setSelected([tag]);
  }, []);

  const tags = useMemo(() => {
    const counts = {};
    recipes.forEach((r) => r.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
    const list = Object.keys(counts).map((tag) => ({ tag, count: counts[tag] }));
    return list.sort(sortBy === 'count' ? (a, b) => b.count - a.count || byName(a, b) : byName);
  }, [sortBy]);

  // A recipe must have every selected tag and match every word typed in the search box
  // (words are matched against the title and tags, so "korean beef" works)
  const visible = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return recipes
      .filter((r) => selected.every((t) => r.tags.includes(t)))
      .filter((r) => {
        const haystack = `${r.title} ${r.tags.join(' ')}`.toLowerCase();
        return words.every((w) => haystack.includes(w));
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [selected, query]);

  const hasFilters = selected.length > 0 || query.trim() !== '';
  const clearAll = () => {
    setSelected([]);
    setQuery('');
    setPicked(null);
  };

  const toggle = (tag) => {
    setPicked(null);
    setSelected((cur) => (cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]));
  };

  const pickRandom = () => {
    // Pick from whatever is currently filtered; avoid repeating the last pick if possible
    const pool = visible.length > 1 ? visible.filter((r) => r !== picked) : visible;
    if (pool.length) setPicked(pool[Math.floor(Math.random() * pool.length)]);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Recipes</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Recipes" />
      </Helmet>
      <br />
      <br />
      <br />
      <p>
        <a href="/">Home</a>
      </p>
      <br />
      <Container>
        <h1 className="hero-title text-center">
          Recipes{' '}
          <span role="img" aria-label="emoji">
            🍽️
          </span>
        </h1>

        <input
          type="search"
          className="recipe-search"
          placeholder="Search recipes or tags…"
          aria-label="Search recipes"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPicked(null);
          }}
        />

        <div className="recipes-controls">
          <p className="controls-label">Filter by tag</p>
          {hasFilters && (
            <button type="button" className="link-btn" onClick={clearAll}>
              Clear all
            </button>
          )}
          <span className="ml-auto" />
          <p className="controls-label">Sort pills</p>
          <button
            type="button"
            className={`pill pill--small ${sortBy === 'name' ? 'pill--active' : ''}`}
            onClick={() => setSortBy('name')}
          >
            A–Z
          </button>
          <button
            type="button"
            className={`pill pill--small ${sortBy === 'count' ? 'pill--active' : ''}`}
            onClick={() => setSortBy('count')}
          >
            Most recipes
          </button>
        </div>

        <div className="pill-row">
          {tags.map(({ tag, count }) => (
            <button
              type="button"
              key={tag}
              className={`pill ${selected.includes(tag) ? 'pill--active' : ''}`}
              aria-pressed={selected.includes(tag)}
              aria-label={`${tag}, ${count} ${count === 1 ? 'recipe' : 'recipes'}`}
              title={`${count} ${count === 1 ? 'recipe' : 'recipes'} tagged ${tag}`}
              onClick={() => toggle(tag)}
            >
              {tag}
              <span className="pill-count" aria-hidden="true">
                {count}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="cta-btn cta-btn--hero"
          onClick={pickRandom}
          disabled={visible.length === 0}
        >
          Random recipe{hasFilters ? ' (from results)' : ''}
        </button>

        {picked && (
          <div className="random-card">
            <span role="img" aria-label="emoji">
              {picked.emoji}
            </span>
            <h3>{picked.title}</h3>
            <div className="pill-row justify-content-center">
              {picked.tags.map((t) => (
                <span key={t} className="pill pill--small">
                  {t}
                </span>
              ))}
            </div>
            <Link to={`/${picked.slug}`} className="cta-btn cta-btn--hero">
              Let&apos;s cook
            </Link>
          </div>
        )}

        <p className="results-count">
          Showing {visible.length} of {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'}
        </p>
        <ul className="recipe-list">
          {visible.map((r) => (
            <li key={r.slug}>
              <Link to={`/${r.slug}`} className="recipe-title">
                {r.emoji} {r.title}
              </Link>
              {r.tags.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`pill pill--small ${selected.includes(t) ? 'pill--active' : ''}`}
                  onClick={() => toggle(t)}
                >
                  {t}
                </button>
              ))}
            </li>
          ))}
          {visible.length === 0 && <li>No recipes match. Try removing a tag or changing your search.</li>}
        </ul>
      </Container>
    </>
  );
};
