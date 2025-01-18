// src/pages/ListingDetails/index.jsx
/**
 * ListingDetails component renders detailed information for a specific listing.
 * 
 * This component dynamically retrieves the listing data based on the URL parameter (id) 
 * and displays:
 * - A slideshow of images related to the listing.
 * - The listing title, location, and tags.
 * - Host information (name and picture).
 * - A star rating system for the listing's rating.
 * - A collapsible description and list of equipment.
 * 
 * The component uses the `useParams` hook from `react-router-dom` to extract the `id` 
 * of the listing from the URL, and the `useData` custom hook to fetch the data.
 * If the listing is found, the details are displayed in a structured layout, else
 * if the listing is not found, a message is shown to indicate that no listing was found.
 * 
 * The host's name is displayed with each word on a separate line. This is achieved by 
 * splitting the host's name into words (using `split(' ')`), and then using `map` to 
 * iterate over each word. Each word is wrapped in a separate `span` element. The `span` 
 * elements are styled with `display: block` to ensure they each take up a full line, 
 * displaying one word per line.
 * 
 * This component also demonstrates the compound component pattern using the `Collapse` 
 * component. In this pattern, `Collapse` is used as a parent component with specific 
 * subcomponents (`Trigger` and `Content`) that manage their behavior and visibility 
 * based on user interaction. The `Trigger` toggles the visibility of the `Content`.
 * 
 * @returns {JSX.Element} The JSX structure containing listing details or an error message.
 */
import { useParams } from 'react-router-dom';
import { useData } from '@/hooks/useData';
import Collapse from '@/components/Collapse';
import Slideshow from '@/components/Slideshow';
import styles from './ListingDetails.module.scss';
import ErrorPage from '@/components/ErrorPage';

const ListingDetails = () => {
  const { id } = useParams(); // Extract the listing ID from the URL
  const { data } = useData(); // Retrieve the listing data from context

  // Find the specific listing by ID from the data
  const listing = data?.find((item) => item.id === id);

  /**
   * Helper function to render stars based on the rating.
   * @param {number} rating - The rating value (1-5).
   * @returns {JSX.Element[]} Array of star elements for the rating.
   */
  const renderStars = (rating) => {
    const stars = [];
    // Loop to generate stars based on rating
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
      
      {/* Slideshow Section - Displays images in a carousel */}
      <div className={styles.listing__slideshow}>
        <Slideshow images={listing.pictures} />
      </div>

      {/* Listing Info Section */}
      <div className={styles.listing__info}>
        <div className={styles.listing__info__left}>
          <h1 className={styles.listing__info__title}>{listing.title}</h1>
          <p className={styles.listing__info__location}>{listing.location}</p>

          {/* Tags Section - Displays listing tags dynamically */}
          <div className={styles.listing__info__tags}>
            {listing.tags.map((tag, index) => (
              <div key={index} className={styles.listing__info__tags__tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.listing__info__right}>
          {/* Host Info Section */}
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

          {/* Rating Section - Renders the rating stars */}
          <div className={styles.listing__info__rating}>
            {renderStars(listing.rating)}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.listing__features}>
        
        {/* Description Section */}
        <div className={styles.listing__features__feature}>
          <Collapse>
            <Collapse.Trigger>
              Description
            </Collapse.Trigger>
            <Collapse.Content>
              {listing.description}
            </Collapse.Content>
          </Collapse>
        </div>

        {/* Equipments Section */}
        <div className={styles.listing__features__feature}>
          <Collapse>
            <Collapse.Trigger>
              Equipments
            </Collapse.Trigger>
            <Collapse.Content>
              <ul>
                {listing.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </Collapse.Content>
          </Collapse>
        </div>
      </div>
    </div>
  ) : (
    // If no listing is found, show a message
      <ErrorPage />
  );
};

export default ListingDetails;
