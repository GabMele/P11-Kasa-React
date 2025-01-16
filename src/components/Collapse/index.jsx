// src/components/Collapse/index.jsx
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Collapse.module.scss";

const CollapseContext = createContext(null);

const Collapse = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CollapseContext.Provider value={{ isExpanded, setIsExpanded }}>
      <div className={styles.collapse}>
        {children}
      </div>
    </CollapseContext.Provider>
  );
};

const useCollapse = () => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error("Collapse components must be used within a Collapse");
  }
  return context;
};

const Trigger = ({ children }) => {
  const { isExpanded, setIsExpanded } = useCollapse();
  
  return (
    <button 
      className={styles.collapse__trigger}
      onClick={() => setIsExpanded(!isExpanded)}
      aria-expanded={isExpanded}
    >
        {children}
      <span 
        className={`${styles.collapse__icon} ${
          isExpanded ? styles.collapse__icon_expanded : ''
        }`} 
      />
    </button>
  );
};

const Content = ({ children }) => {
  const { isExpanded } = useCollapse();
  
  return (
    <div
      className={`${styles.collapse__content} ${
        isExpanded ? styles.collapse__content_expanded : ''
      }`}
    >
      {children}
    </div>
  );
};

// PropTypes for main Collapse component
Collapse.propTypes = {
  children: PropTypes.node.isRequired,
};

// PropTypes for Trigger component
Trigger.propTypes = {
  children: PropTypes.node.isRequired,
};

// PropTypes for Content component
Content.propTypes = {
  children: PropTypes.node.isRequired,
};

// Assign the sub-components
Collapse.Trigger = Trigger;
Collapse.Content = Content;

export default Collapse;