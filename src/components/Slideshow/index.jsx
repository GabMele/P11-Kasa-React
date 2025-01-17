// src/components/Slideshow/index.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slideshow.module.scss";

/**
 * A React component that renders a carousel-style slideshow of images with navigation controls (Next and Previous).
 *
 * The `Slideshow` component manages the display of a list of images. It offers navigation controls that allow the user
 * to cycle through images by updating the current image index (`currentIndex`). When navigating beyond the first or last image,
 * the index loops back to the opposite end of the array, creating a continuous carousel effect.
 *
 * - Uses React state management (`useState`) to handle the current image index.
 * - Updates the `transform` CSS property to shift the slideshow container and show the correct image.
 * - Only displays navigation controls if there is more than one image.
 * 
 * @component
 * @param {Object} props - The props passed to the component.
 * @param {string[]} props.images - Array of image URLs to be displayed in the slideshow.
 * @returns {JSX.Element} The JSX representation of the Slideshow component.
 */
const Slideshow = ({ images }) => {
  // React hook to store the index of the currently displayed image in the slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  // Edge case handling: if no images are provided, return a fallback message
  if (!images || images.length === 0) {
    return <p>No images to display.</p>;
  }

  /**
   * Handles the "Next" button click event.
   * 
   * This function updates the `currentIndex` by incrementing it. The `setCurrentIndex` function
   * modifies the state and triggers a re-render of the component.
   * The modulus operator is used to wrap the index around when it exceeds the total number of images.
   * For example, if `currentIndex` is 2 and there are 3 images, `(2 + 1) % 3` will return `0`, 
   * thus wrapping around to the first image after the last one.
   * 
   * React state updates trigger re-rendering, allowing the image track to update and shift.
   * 
   * @function
   * @returns {void}
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Wrap around logic using modulus
  };

  /**
   * Handles the "Previous" button click event.
   * 
   * This function updates the `currentIndex` by decrementing it. If the index is 0 (the first image),
   * the `currentIndex` is set to the last image in the array by evaluating `images.length - 1`. This creates
   * a circular navigation effect where going backward from the first image will show the last one.
   * 
   * Similar to `handleNext`, React's `setCurrentIndex` ensures that state changes trigger a re-render, updating
   * the visible image based on the new `currentIndex`.
   * 
   * @function
   * @returns {void}
   */
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Circular backward navigation logic
    );
  };

  return (
    <div className={styles.slideshow}>
      {/* The track that holds all the images. We use a CSS transform to shift the track. */}
      <div
        className={styles.slideshow__track}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // CSS transform to shift the track based on currentIndex
        }}
      >
        {/* Render each image within the track, each with a unique key */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image} // Image URL
            alt={`Slide ${index + 1}`} // Accessibility label indicating the slide number
            className={styles.slideshow__image}
          />
        ))}
      </div>

      {/* Conditional rendering of the navigation buttons */}
      {images.length > 1 && (
        <>
          {/* "Previous" button */}
          <button
            className={`${styles.slideshow__button} ${styles.slideshow__buttonPrev}`}
            onClick={handlePrev} // Trigger previous slide
            aria-label="Previous image" // Accessibility label
          >
            &#10094; {/* Unicode left arrow character */}
          </button>

          {/* "Next" button */}
          <button
            className={`${styles.slideshow__button} ${styles.slideshow__buttonNext}`}
            onClick={handleNext} // Trigger next slide
            aria-label="Next image" // Accessibility label
          >
            &#10095; {/* Unicode right arrow character */}
          </button>
        </>
      )}

      {/* Display the current image number and total images count */}
      <div className={styles.slideshow__number}>
        {currentIndex + 1}/{images.length} {/* Display current image index (1-based) out of total */}
      </div>
    </div>
  );
};

Slideshow.propTypes = {
  /**
   * An array of image URLs to be displayed in the slideshow.
   * The array should contain strings that represent valid image paths.
   * The component will render each URL as an <img> element.
   * 
   * @type {string[]}
   * @required
   */
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;
