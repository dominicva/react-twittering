import { useState } from 'react';

const CATEGORIES = ['retweets', 'mentions', 'hashtags', 'contains'];

const SearchParams = () => {
  const [username, setUsername] = useState('balajis');
  const [category, setCategory] = useState('');
  const [maxResults, setMaxResults] = useState(10);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="username">
          Twitter username {username}
          <br />
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="category">
          Search by {category}
          <br />
          <select
            id="category"
            type="text"
            value={category}
            onChange={e => {
              setCategory(e.target.value);
            }}
            onBlur={e => {
              setCategory(e.target.value);
            }}
          >
            <option />
            {CATEGORIES.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="max-results">
          Max results {maxResults}
          <br />
          <input
            id="max-results"
            type="number"
            value={maxResults}
            onChange={e => {
              setMaxResults(e.target.value);
            }}
            onBlur={e => {
              setMaxResults(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <button style={{ padding: '0.5rem 1rem' }}>Get tweets</button>
      </form>
    </div>
  );
};

export default SearchParams;
