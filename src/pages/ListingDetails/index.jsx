// src/pages/ListingDetails/index.jsx
import { useParams } from 'react-router-dom';
import { useData } from '@/hooks/useData';

const ListingDetails = () => {
  const { id } = useParams();
  const { data } = useData();

  const listing = data?.find((item) => item.id === id);

  return listing ? (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>{listing.tags}</p>
    </div>
  ) : (
    <p>Annonce non trouvée.</p>
  );
};

export default ListingDetails;
