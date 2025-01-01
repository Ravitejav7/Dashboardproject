// NewsFilter.js
import React, { useState } from 'react';

const NewsFilter = ({ newsArticles }) => {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('All');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredArticles = newsArticles.filter((article) => {
    return (
      (category === 'All' || article.category === category) &&
      (article.title.toLowerCase().includes(filter.toLowerCase()) ||
        article.description.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  return (
    <div className="news-filter-container">
      <h2>News Filter</h2>
      <div>
        <input
          type="text"
          placeholder="Search news"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <select value={category} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
          <option value="Sports">Sports</option>
        </select>
      </div>
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span>{article.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFilter;
