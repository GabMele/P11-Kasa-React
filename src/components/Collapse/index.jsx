/**
 * `Collapse` component provides a collapsible UI pattern with subcomponents for trigger and content.
 * 
 * The `Collapse` component manages the expanded/collapsed state, which is shared across its subcomponents 
 * using the context API. The `Trigger` component toggles the collapse state, while the `Content` component 
 * shows or hides its content based on the state.
 * 
 * This `Collapse` component follows the compound component pattern by using subcomponents.
 * 
 * - `Collapse` is the parent component that manages the state.
 * - `Trigger` is the button that toggles the collapse state.
 * - `Content` is the section that is shown or hidden when the state changes.
 * 
 * This pattern allows `Trigger` and `Content` to be decoupled from the parent `Collapse` component
 * while keeping the state management centralized in the `Collapse` parent.
 * 
 * The `useCollapse` hook is used by the subcomponents to access the collapse state.
 * 
 * @module Collapse
 */

import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Collapse.module.scss";

// Create context to share collapse state across components
const CollapseContext = createContext(null);

/**
 * `Collapse` component that provides a context to manage the expanded/collapsed state.
 * 
 * This parent component uses the `useState` hook to keep track of whether the content 
 * is expanded or collapsed, and it provides this state to its child components via context.
 * 
 * @param {Object} props - The properties passed to the Collapse component.
 * @param {React.ReactNode} props.children - The child components (Trigger and Content).
 * 
 * @returns {JSX.Element} The Collapse component with a provider for the collapse state.
 */
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

/**
 * Custom hook to access the collapse state context.
 * 
 * This hook provides the current collapse state (`isExpanded`) and the function to toggle it 
 * (`setIsExpanded`), allowing the `Trigger` and `Content` components to access and manipulate 
 * the shared state.
 * 
 * @returns {Object} The collapse state and the function to toggle it.
 * 
 * @throws {Error} If used outside the Collapse component, an error is thrown to ensure proper context usage.
 */
const useCollapse = () => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error("Collapse components must be used within a Collapse");
  }
  return context;
};

/**
 * `Trigger` component that toggles the collapse state when clicked.
 * 
 * This component is a button that, when clicked, toggles the visibility of the content managed 
 * by the `Collapse` component. It uses the `useCollapse` hook to change the state between expanded 
 * and collapsed.
 * 
 * @param {Object} props - The properties passed to the Trigger component.
 * @param {React.ReactNode} props.children - The content of the button that triggers the collapse.
 * 
 * @returns {JSX.Element} The Trigger button component, which toggles the collapse state.
 */
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
        className={`${styles.collapse__icon} ${isExpanded ? styles.collapse__icon_expanded : ''}`} 
      />
    </button>
  );
};

/**
 * `Content` component that displays its content based on the collapse state.
 * 
 * This component is responsible for rendering content that is shown or hidden based on the collapse 
 * state (`isExpanded`). It listens to the state via the context and updates its visibility accordingly.
 * 
 * @param {Object} props - The properties passed to the Content component.
 * @param {React.ReactNode} props.children - The content to display within the collapsible section.
 * 
 * @returns {JSX.Element} The Content component, which shows or hides based on the collapse state.
 */
const Content = ({ children }) => {
  const { isExpanded } = useCollapse();
  
  return (
    <div
      className={`${styles.collapse__content} ${isExpanded ? styles.collapse__content_expanded : ''}`}
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
