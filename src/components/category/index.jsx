import { useParams } from 'react-router-dom';
import initialCategories from '../../data/categories';
import Headline from '../headline';
import BackButton from '../backButton';
import Description from '../description';
import PlacesList from '../placesList'

function Category() {
  const { categoryId } = useParams();
  const category = initialCategories.find((category) => category.id === categoryId);

  return (
    <div className="max-w-7xl m-auto my-0 w-full px-4">
      <BackButton title={'← Назад к категориям'} />
      <Headline title={category.name} />
      <Description title={'Исторический центр города с архитектурными памятниками'} />
      <div>
        <PlacesList />
      </div>
    </div>
  );
}

export default Category;
