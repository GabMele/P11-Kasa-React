// src/App.jsx
import DataFetchingComponent from './components/DataFetchingComponent';
import AppRouter from './router';

const App = () => {
  return (
    <div>
      <DataFetchingComponent source="local">
        {data => <AppRouter data={data} />}
      </DataFetchingComponent>
    </div>
  );
};

export default App;
