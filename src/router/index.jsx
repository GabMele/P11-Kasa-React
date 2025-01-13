// src/router/index.jsx
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
    <div className={styles.mainLayout}>
      <div className={styles.content}>
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
