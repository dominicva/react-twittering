import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SearchParams from './SearchParams';
import Details from './Details';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Link to="/">
          <h1>Tweet Hacker</h1>
        </Link>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
