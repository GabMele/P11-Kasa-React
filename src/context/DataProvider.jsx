// src/context/DataProvider.jsx
// The DataProvider manages the application's data state and makes it
// available to all child components
import { PropTypes } from 'prop-types';
import DataContext from './DataContext';
import useFetch from '../hooks/useFetch';

export const DataProvider = ({ source, children }) => {
  const { data, loading, error } = useFetch(source);

  // Handle loading state
  if (loading) {
    return <p>Chargement des données...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Erreur: {error}</p>;
  }

  // Provide data to children components
  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  source: PropTypes.oneOf(['api', 'local']).isRequired,
  children: PropTypes.node.isRequired,
};


