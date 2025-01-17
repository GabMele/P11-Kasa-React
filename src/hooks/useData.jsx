// src/hooks/useData.jsx

/**
 * Custom hook to access the data from the DataContext.
 * 
 * This hook allows components to easily access the context value
 * provided by the `DataContext`. If the hook is used outside of 
 * a `DataProvider`, it throws an error to prevent misuse.
 * 
 * @throws {Error} Will throw an error if used outside of DataProvider
 * 
 * @returns {unknown} The context value from `DataContext`
 */
import { useContext } from 'react';
import DataContext from '../context/DataContext';

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
