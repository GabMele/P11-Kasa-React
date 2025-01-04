// src/router/index.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/components/Header';
import ErrorPage from '@/components/ErrorPage';
import ListingDetails from '@/pages/ListingDetails';

const AppRouter = ({ data }) => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/listings/:id" element={<ListingDetails data={data} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

// PropTypes validation
AppRouter.propTypes = {
    data: PropTypes.array.isRequired, // 'data' should be an array (list of listings)
  };

export default AppRouter;
