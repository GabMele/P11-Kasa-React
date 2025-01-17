// src/hooks/useFetch.js

/**
 * Custom hook to fetch data based on a given source type and data.
 * 
 * This hook manages the loading state, error state, and fetched data. 
 * It uses the `fetchOrLoadData` utility function to fetch or load the data 
 * and returns the current state, including `data`, `loading`, and `error`.
 * 
 * @param {string} sourceType The type of the data source (e.g., API endpoint).
 * @param {unknown} sourceData The data or parameters required to fetch the data.
 * 
 * @returns {Object} The state object containing:
 *   - `data`: The fetched data (or `null` if not yet fetched).
 *   - `loading`: A boolean indicating if the data is still being loaded.
 *   - `error`: The error message (or `null` if no error occurred).
 */
import { useState, useEffect } from 'react';
import { fetchOrLoadData } from '../utils/fetchOrLoadData';

const useFetch = (sourceType, sourceData) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const loadData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const result = await fetchOrLoadData(sourceType, sourceData);
        setState({ data: result, loading: false, error: null });
      } catch (err) {
        setState({ data: null, loading: false, error: err.message });
      }
    };

    loadData();
  }, [sourceType, sourceData]);

  return state;
};

export default useFetch;
