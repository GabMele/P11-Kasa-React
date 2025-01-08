import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/components/Header';
import ErrorPage from '@/components/ErrorPage';
import ListingDetails from '@/pages/ListingDetails';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/listings/:id" element={<ListingDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
