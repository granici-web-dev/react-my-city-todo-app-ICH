import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
