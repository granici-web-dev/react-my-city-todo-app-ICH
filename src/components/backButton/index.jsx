import { Link } from 'react-router-dom';

function BackButton({ title }) {
  return (
    <div className="mt-8">
      <Link to={'/categories'} className="text-blue-600">
        {title}
      </Link>
    </div>
  );
}

export default BackButton;
