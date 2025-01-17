// src/context/DataContext.jsx
/**
 * Context for managing global data state in the app.
 * 
 * This context provides a way to pass data through the component tree 
 * without having to manually pass props down at every level.
 * 
 * @example
 * import DataContext from './context/DataContext';
 * 
 * // Usage in a component:
 * // const value = useContext(DataContext);
 * 
 * @type {React.Context<unknown>}
 */
import { createContext } from 'react';

const DataContext = createContext();
export default DataContext;
