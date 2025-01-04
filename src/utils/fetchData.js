// src/utils/fetchData.js
export const fetchData = async (source) => {
    try {
      if (source === 'api') {
        // Fetch data from the API (replace the URL with the real API URL)
        const response = await fetch('https://votreapi.com/api/logements');
        if (!response.ok) {
          throw new Error('Failed to fetch data from the API');
        }
        return await response.json();
      } else {
        // Load data from local JSON file (for development or fallback in case of API issue)
        const data = await import('@/data/logements.json');
        return data.default; // Access the default export of the dynamically imported file
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  