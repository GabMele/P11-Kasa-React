export const fetchOrLoadData = async (source) => {
  if (source === 'local') {
    try {
      const data = await import('@/data/logements.json'); 
      return data.default;
    } catch {
      throw new Error('Failed to load local data from JSON file');
    }
  } else if (source === 'api') {
    try {
      const response = await fetch('/api/data'); 
      if (!response.ok) {
        throw new Error(`Failed to fetch API data - HTTP ${response.status}`);
      }
      return await response.json();
    } catch {
      throw new Error('Failed to fetch API data');
    }
  } else {
    throw new Error('Invalid source specified. Use "local" or "api".');
  }
};
