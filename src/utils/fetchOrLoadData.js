// src/utils/fetchOrLoadData.js

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
  } else // if (sourceType === 'api') 
    {
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
