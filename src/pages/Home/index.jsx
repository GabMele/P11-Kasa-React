// src/pages/Home/index.jsx
// import Button from '../../components/Button';  // Import reusable Button component

// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from "./Home.module.scss";
import Collapse from "../../components/Collapse/index";

const titleTest = "test";

const Home = ({ data }) => (
  <div className={styles.home}>
    <h1>Accueil</h1>

    <div>
      {data ? (
        data.map((listing) => (
          <div key={listing.id}>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>{listing.tags}</p>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
    <div>
      <Collapse title={titleTest}>
        {(t) => (
          <ul>
            <li>{t}</li>
            <li>test puce</li>
          </ul>
        )}
      </Collapse>
    </div>
  </div>
);

export default Home;
