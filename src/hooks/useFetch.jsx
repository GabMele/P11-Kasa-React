// src/hooks/useFetch.js
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
