import { useData } from '@/hooks/useData';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const { data } = useData();

  if (!data) {
    return <p>Données non disponibles, contacter l&apos;administrateur.</p>;
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <div className={styles.home__hero}>
        <h1 className={styles.home__hero__slogan}>Chez vous, partout et ailleurs</h1>
      </div>

      {/* Listing Grid */}
      <div className={styles.home__listings}>
        {data.map((listing) => (
          <Link
            to={`/listings/${listing.id}`}
            key={listing.id}
            className={styles.home__listings__card__link}
          >
            {/* Card */}
            <div className={styles.home__listings__card}>
              <img
                src={listing.cover}
                alt={listing.title}
                className={styles.home__listings__card__image}
              />
              <div className={styles.home__listings__card__title}>{listing.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
