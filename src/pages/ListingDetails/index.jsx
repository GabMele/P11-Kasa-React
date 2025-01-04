// src/pages/ListingDetails/index.jsx
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingDetails = ({ data }) => {
  const { id } = useParams();
  const listing = data.find(item => item.id === id);

  if (!listing) {
    return <p>Annonce non trouvée !</p>;
  }

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      {/* Display additional details if necessary */}
    </div>
  );
};

// PropTypes validation
ListingDetails.propTypes = {
    data: PropTypes.array.isRequired, // 'data' should be an array (list of listings)
  };

export default ListingDetails;
