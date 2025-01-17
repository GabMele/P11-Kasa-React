// src/utils/fetchOrLoadData.js

/**
 * Utility function to fetch or load data based on the source type and source data.
 * 
 * This function is typically used within custom hooks (e.g., `useFetch`) to handle 
 * both local JSON file loading and API data fetching. It ensures that the provided 
 * source type and data source are valid and throws detailed errors if there are any 
 * issues during the fetching or loading process.
 * 
 * @param {string} sourceType The type of the data source ('local' or 'api').
 * @param {string} sourceData The specific data to fetch (e.g., 'about', 'logements').
 * 
 * @returns {Promise<unknown>} The fetched or loaded data.
 * 
 * @throws {Error} Will throw an error if the source type or source data is invalid,
 *                 or if there is an issue fetching or loading the data.
 */
const VALID_SOURCE_TYPES = ['local', 'api'];

// const JSON_FILE_PATHS = {
//   about: '@/data/AboutPageContent.json',
//   logements: '@/data/logements.json',
// }

const JSON_FILE_PATHS = {
  about: '../data/AboutPageContent.json',
  logements: '../data/logements.json',
}

export const fetchOrLoadData = async (sourceType, sourceData) => {
  if (!sourceType || !VALID_SOURCE_TYPES.includes(sourceType)) {
    throw new Error(`Invalid data source type specified:
              Must be one of ${VALID_SOURCE_TYPES.join(', ')}.
              Received "${sourceType}"`);
  }

  if (!sourceData || !Object.keys(JSON_FILE_PATHS).includes(sourceData)) {
    throw new Error(`Invalid data source specified:
              Must be one of ${Object.keys(JSON_FILE_PATHS.join(', '))}.
              Received "${sourceData}"`);
  }

  if (sourceType === 'local') {
    try {
      const data = await import(JSON_FILE_PATHS[sourceData]); 
      return data.default;
    } catch (error) {
      throw new Error(`
        JSON_FILE_PATHS[sourceData] = ${JSON_FILE_PATHS[sourceData]}.
        ${error.message} while loading data from local ${sourceData} JSON file'`);
    
    }
  } else { // if (sourceType === 'api') 
    try {
      const response = await fetch(`${sourceData}`);	 
      if (!response.ok) {
        throw new Error(`Failed to fetch API data ${sourceData}
              - HTTP ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`${error.message} while fetching API ${sourceData} data`);
    }
  }
};
