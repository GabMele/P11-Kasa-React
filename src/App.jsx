// src/App.jsx
import { DataProvider } from '@/context/DataProvider'; 
import AppRouter from '@/router';

const App = () => (
  <DataProvider source="local">
    <AppRouter />
  </DataProvider>
);

export default App;
