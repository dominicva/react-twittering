import { useState } from 'react';
import SearchParams from './SearchParams';
import SearchResults from './SearchResults';

const Search = () => {
  const [username, setUsername] = useState('coinbase');

  return (
    <>
      <SearchParams />

      <SearchResults user={user} tweet={tweets} />
    </>
  );
};

export default Search;
