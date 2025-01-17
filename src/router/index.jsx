// src/router/index.jsx

/**
 * Main routing component for the app using React Router.
 * 
 * This component sets up the routes for different pages of the app, 
 * including the `Home`, `About`, and `ListingDetails` pages. It also 
 * includes a fallback route for undefined paths, rendering an `ErrorPage` 
 * in case of a 404 error. The layout structure has been designed with 
 * a full-width footer and a boxed content area (`contentArea`), ensuring 
 * a responsive design.
 * 
 * @returns {JSX.Element} The rendered router with all routes and layout.
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ErrorPage from '@/components/ErrorPage';
import ListingDetails from '@/pages/ListingDetails';
import styles from './Router.module.scss';

const AppRouter = () => (
  <Router>
    <div className={styles.fullLayout}>
      <div className={styles.contentArea}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings/:id" element={<ListingDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
