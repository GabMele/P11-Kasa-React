// src/pages/Home.jsx

/**
 * Home page component that displays a hero section and a grid of listings.
 * 
 * This component fetches data using the `useData` custom hook and displays 
 * a list of items fetched from the data source (logements.json). If the data is unavailable, 
 * it shows an error message. Otherwise, it renders a hero section with some 
 * text, followed by a grid of listing cards. Each card is clickable and links 
 * to a detailed view of the respective listing.
 * 
 * The component is styled using the `Home.module.scss` stylesheet.
 * 
 * @returns {JSX.Element} The rendered Home page with a hero section and listings.
 * @see useData for data fetching logic.
 * @see Hero for the hero section component.
 */
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
