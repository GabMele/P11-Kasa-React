// src/pages/Home/index.jsx
// import { Link } from 'react-router-dom';
import { useData } from '@/hooks/useData';
import styles from './Home.module.scss';

const Home = () => {
  const { data } = useData();

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className={styles.home}>
      <h1>Accueil</h1>
      {data.map((listing) => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <p>{listing.tags}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
