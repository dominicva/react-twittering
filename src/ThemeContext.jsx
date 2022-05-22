import { createContext } from 'react';
/**
 * TODO
 */
const ThemeContext = createContext([
  { backgroundColor: 'teal', color: 'black', padding: '1rem' },
  () => {},
]);

export default ThemeContext;
