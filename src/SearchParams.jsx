import { useState, useEffect } from 'react';
// import jsFetch from '@notthedom/js-fetch';
import User from './User';

const CATEGORIES = ['retweets', 'mentions', 'hashtags', 'contains'];

const SearchParams = () => {
  const [username, setUsername] = useState('balajis');
  const [category, setCategory] = useState('');
  const [maxResults, setMaxResults] = useState(10);
  const [tweets, setTweets] = useState([]);
  const [userData, setUserData] = useState({});

  const getData = async () => {
    const data = await fetch(
      `http://localhost:3001/api/tweets/${username}`
    ).then(r => r.json());
    // console.log('data', data);

    setTweets(data.tweets);
    setUserData(data.user);
  };

  useEffect(() => {
    getData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getData();
  }

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Get tweets
        </button>
      </form>

      <User
        key={userData.id}
        name={userData.name}
        username={userData.username}
        location={userData.location}
      />
      <ul>
        {tweets.map(t => {
          return (
            <li style={{ padding: '1rem 2rem' }} key={t.id}>
              {t.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchParams;
