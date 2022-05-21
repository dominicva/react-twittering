import { createRoot } from 'react-dom/client';
import Tweet from './Tweet';
import SearchParams from './SearchParams';

function App() {
  return (
    <div>
      <h1>Tweet Hacker</h1>
      <SearchParams />
      <Tweet name="Dominic" username="domvana" location="Tulum, Mexico" />
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
