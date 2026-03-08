import { Link } from 'react-router-dom';
import initialCategories from '../../data/categories'

function PlacesList() {
  return <div>{initialCategories.places.map((place) => {
    return (
      <Link>
        <div>{place.image}</div>
      </Link>
    );
  })}</div>;
}

export default PlacesList;