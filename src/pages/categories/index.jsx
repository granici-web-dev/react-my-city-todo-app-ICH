import CategoriesList from '../../components/categoriesList';
import Description from '../../components/description';
import Headline from '../../components/headline';

function Categories() {
  return (
    <div className="max-w-7xl m-auto my-0 w-full px-4">
      <Headline title={'Категории'} />
      <Description title={'Выберите категорию, чтобы узнать о его достопримечательностях'} />
      <CategoriesList />
    </div>
  );
}

export default Categories;
