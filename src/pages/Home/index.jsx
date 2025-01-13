import { useData } from '@/hooks/useData';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Hero from '@/components/Hero';

const Home = () => {
  const { data } = useData();

  if (!data) {
    return <p>Données non disponibles, contacter l&apos;administrateur.</p>;
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <Hero overlayOpacity={0.2}>
        <span>Chez vous,&nbsp; </span>
        <span>partout et ailleurs</span>
      </Hero>


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
              <div className={styles.home__listings__card__title}>
                {listing.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
