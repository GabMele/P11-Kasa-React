// src/context/DataProvider.jsx
import { PropTypes } from 'prop-types';
import DataContext from './DataContext';
import useFetch from '../hooks/useFetch';

/**
 * DataProvider component.
 *
 * Provides data management for the application by fetching and supplying
 * data from either a local source or an API to its child components. Handles
 * loading and error states during data retrieval.
 *
 * @component
 * @param {Object} props
 * @param {'api'|'local'} props.sourceType - The type of data source:
 *    - 'api': Fetches data from an external API.
 *    - 'local': Loads data from local JSON files.
 * @param {string} props.sourceData - The specific data key or file to fetch:
 *    - 'logements': Fetches housing data.
 *    - 'content': Fetches content for static pages, such as "About".
 * @param {React.ReactNode} props.children - The child components that require the provided data.
 *
 * @returns {JSX.Element} A provider that wraps children and passes down data context.
 *
 * @example
 * <DataProvider sourceType="local" sourceData="logements">
 *   <App />
 * </DataProvider>
 */
export const DataProvider = ({ sourceType, sourceData, children }) => {
  const { data, loading, error } = useFetch(sourceType, sourceData);

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
  sourceType: PropTypes.oneOf(['api', 'local']).isRequired,
  sourceData: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
