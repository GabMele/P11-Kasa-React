// src/pages/Home/index.jsx
// import Button from '../../components/Button';  // Import reusable Button component

// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './Home.module.scss';

// src/pages/Home.jsx
import DataFetchingComponent from '@/components/DataFetchingComponent';

const Home = () => (
  <div className={styles.home}>
    <h1>Accueil</h1>
    <DataFetchingComponent source="local">
      {(data) => (
        <div>
          {data ? (
            data.map((listing) => (
              <div key={listing.id}>
                <h2>{listing.title}</h2>
                <p>{listing.description}</p>
                <p>{listing.tags}</p>
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
    </DataFetchingComponent>

  </div>
);

export default Home;




