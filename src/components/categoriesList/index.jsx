import { Link } from 'react-router-dom';
import initialCategories from '../../data/categories';

function CategoriesList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-6 mb-6">
      {initialCategories.map((category) => {
        return (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]">
            <div className='text-4xl mb-4'>{category.icon}</div>
            <h2 className='text-xl font-bold mb-4'>{category.name}</h2>
            <div className='flex justify-between'>
              <span className='bg-blue-600 text-blue-50 py-1 px-3 rounded-md'>{category.places.length} мест</span>
              <span className='text-blue-600 font-medium'>Подробнее →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoriesList;
