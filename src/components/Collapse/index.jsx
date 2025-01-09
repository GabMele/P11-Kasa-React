import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Collapse.module.scss";

const Collapse = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapse__header} onClick={toggleCollapse}>
        <div className={styles.collapse__title}>{title}</div>
        <div
          className={`${styles.collapse__icon} ${
            isExpanded ? styles.collapse__icon__expanded : ""
          }`}
        ></div>
      </div>
      <div
        className={`${styles.collapse__content} ${
          isExpanded ? styles.collapse__content__expanded : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
