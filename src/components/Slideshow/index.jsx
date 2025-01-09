import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slideshow.module.scss";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const hasMultipleImages = images.length > 1;

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('slideLeft');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('slideRight');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setDirection(null);
  };

  return (
    <div className={styles.slideshow} aria-label="Diaporama des images">
      <div className={styles.slideshow__imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1} sur ${images.length}`}
          className={`${styles.slideshow__image} ${direction ? styles[direction] : ''}`}
          onAnimationEnd={handleTransitionEnd}
        />
      </div>

      {hasMultipleImages && (
        <>
          <button
            className={`${styles.slideshow__arrow} ${styles.slideshow__arrow__left}`}
            onClick={handlePrev}
            aria-label="Image précédente"
            disabled={isAnimating}
          >
            &#10094;
          </button>
          <button
            className={`${styles.slideshow__arrow} ${styles.slideshow__arrow__right}`}
            onClick={handleNext}
            aria-label="Image suivante"
            disabled={isAnimating}
          >
            &#10095;
          </button>
        </>
      )}

      {hasMultipleImages && (
        <div
          className={styles.slideshow__number}
          aria-live="polite"
          aria-label={`Image actuelle : ${currentIndex + 1} sur ${images.length}`}
        >
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;