// src/pages/ListingDetails/index.jsx
import { useParams } from 'react-router-dom';
import { useData } from '@/hooks/useData';
import Collapse from '@/components/Collapse';
import Slideshow from '@/components/Slideshow';
import styles from './ListingDetails.module.scss';

const ListingDetails = () => {
  const { id } = useParams();
  const { data } = useData();

  const listing = data?.find((item) => item.id === id);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.listing__info__rating__star} ${
            i <= rating ? styles.full : styles.empty
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return listing ? (
    <div className={styles.listing}>

      {/* Slideshow */}
      <div className={styles.listing__slideshow}>
        <Slideshow images={listing.pictures} />
      </div>

      {/* Title and Location */}
      <div className={styles.listing__info}>
        <div className={styles.listing__info__left}>
          <h1 className={styles.listing__info__title}>{listing.title}</h1>
          <p className={styles.listing__info__location}>{listing.location}</p>
          {/* Tags Section */}
          <div className={styles.listing__info__tags}>
            {listing.tags.map((tag, index) => (
              <div key={index} className={styles.listing__info__tags__tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.listing__info__right}>
          <div className={styles.listing__info__host}>
          <span className={styles.listing__info__host__name}>
            {listing.host.name.split(' ').map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </span>
            <img
              className={styles.listing__info__host__picture}
              src={listing.host.picture}
              alt={`${listing.host.name}'s avatar`}
            />
          </div>
          <div className={styles.listing__info__rating}>
            {renderStars(listing.rating)}
          </div>
        </div>
      </div>

      {/* Description and Equipments */}
      <div className={styles.listing__content}>
        {/* Description Section */}
        <div className={styles.listing__content__description}>
          <Collapse title="Description">{listing.description}</Collapse>
        </div>

        {/* Equipments Section */}
        <div className={styles.listing__content__equipments}>
          <Collapse title="Equipments">
            <ul>
              {listing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.fullscreenMessage}>
      <p>Annonce non trouvée.</p>
    </div>
  );
};

export default ListingDetails;
