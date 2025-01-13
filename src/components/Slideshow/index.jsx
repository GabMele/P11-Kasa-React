import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slideshow.module.scss";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshow__track}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={styles.slideshow__image}
          />
        ))}
      </div>
      {/* Only show chevrons if there is more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            className={`${styles.slideshow__button} ${styles.slideshow__buttonPrev}`}
            onClick={handlePrev}
            aria-label="Previous image"
          >
            &#10094;
          </button>
          <button
            className={`${styles.slideshow__button} ${styles.slideshow__buttonNext}`}
            onClick={handleNext}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </>
      )}

      <div className={styles.slideshow__number}>
        {currentIndex + 1}/{images.length}
      </div>

    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
