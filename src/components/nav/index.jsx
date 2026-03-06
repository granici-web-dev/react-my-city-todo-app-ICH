import { NavLink } from 'react-router-dom';
import navMenu from '../../data/nav';

function Nav() {
  return (
    <nav className="mt-5 flex gap-3">
      {navMenu.map((item) => {
        return (
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-500 text-blue-50 px-3 py-2 rounded-sm transition duration-200 ease-in hover:bg-blue-700'
                : 'px-3 py-2 rounded-xs transition duration-200 ease-in hover:bg-gray-600 text-blue-50'
            } key={item.id}>
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Nav;
