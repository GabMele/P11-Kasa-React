// src/App.jsx
import { DataProvider } from '@/context/DataProvider'; 
import AppRouter from '@/router';

/**
 * Main application component.
 *
 * Wraps the application with the `DataProvider` to supply the required data
 * for the application depending on the source type and data key.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 *
 * @example
 * <App />
 *
 * @param {Object} DataProvider
 * @param {'local'|'api'} DataProvider.sourceType - Defines the type of data source:
 *    - 'local': Uses static JSON files.
 *    - 'api': Fetches data from an API or remote service.
 * @param {string} DataProvider.sourceData - Specifies the exact data source to use:
 *    - 'logements': Provides data for housing listings.
 *    - 'content': Supplies content for the "About" page.
 */
const App = () => (
  <DataProvider sourceType="local" sourceData="logements">
    <AppRouter />
  </DataProvider>
);

export default App;

