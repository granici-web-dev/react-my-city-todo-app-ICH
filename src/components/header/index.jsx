import Nav from '../nav'
import Logo from '../logo';

function Header() {
  return (
    <div className="bg-slate-700 px-4 py-4">
      <div className="max-w-7xl my-0 mx-auto">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}

export default Header;
