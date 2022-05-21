import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import SearchParams from './SearchParams';

function App() {
  return (
    <StrictMode>
      <div id="app">
        <h1>Tweet Hacker</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
