// src/App.jsx
import { DataProvider } from '@/context/DataProvider'; 
import AppRouter from '@/router';

const App = () => (
  <DataProvider sourceType="local" sourceData="logements">
    <AppRouter />
  </DataProvider>
);

export default App;
