import { useState, useEffect } from 'react';
import Results from './Results';

const SearchParams = () => {
  const [username, setUsername] = useState('coinbase');
  const [{ user, tweets }, setData] = useState({ user: {}, tweets: [] });

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getData() {
    const alreadyInLocalStorage = window.localStorage.getItem(username);

    if (alreadyInLocalStorage) {
      console.log('Getting data from local storage...');

      setData(JSON.parse(alreadyInLocalStorage));
    } else {
      console.log('Fetching data from the API...');

      const apiResponse = await fetch(
        `http://localhost:3001/api/tweets/${username}`
      ).then(r => r.json());

      console.log('data:', apiResponse);

      setData(apiResponse);

      window.localStorage.setItem(username, JSON.stringify(apiResponse));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  return (
    <main>
      <div className="search-params">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <span>Twitter username</span>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <span id="preview-search-param">
              {username ? `@${username}` : ''}
            </span>
          </label>

          <button type="submit">Lookup @{username ? username : ' ...'}</button>
        </form>

        <Results user={user} tweets={tweets} />
      </div>
    </main>
  );
};

export default SearchParams;

/* <label htmlFor="category">
            Search by {category}
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
          */
