// src/components/DataFetchingComponent.jsx
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../utils/fetchData';

const DataFetchingComponent = ({ source = 'local', children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        try {
          const result = await fetchData(source);
          console.log('Fetched data:', result); // Log the fetched data
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      getData();
    }, [source]);
  
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
  
    console.log('Rendering children with data:', data); // Log the data being passed to children
    console.log('Children prop type:', typeof children); // Log the type of children
    return children(data);
  };
  

// PropTypes validation
DataFetchingComponent.propTypes = {
    source: PropTypes.oneOf(['api', 'local']), // 'source' can be either 'api' or 'local'
    children: PropTypes.func.isRequired, // 'children' should be a function that takes the data
  };

export default DataFetchingComponent;
