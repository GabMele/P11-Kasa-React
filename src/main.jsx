// src/main.jsx
/**
 * @fileoverview Entry point of the application. 
 * Renders the React application to the DOM.
 */

import { StrictMode } from 'react'; // Ensures React best practices and warns about potential problems
import { createRoot } from 'react-dom/client'; // ReactDOM method for creating a root and rendering React components
import '@/styles/global.scss'; // Global styles for the application
import App from './App.jsx'; // Main application component

/**
 * Mounts the React application into the DOM element with id 'root'.
 * 
 * React.StrictMode is used as a wrapper to enable checks for potential issues in the application
 * during development (e.g., deprecated APIs, unexpected side effects, etc.).
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

