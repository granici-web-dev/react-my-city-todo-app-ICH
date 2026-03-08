import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home'
import Layout from './components/layout';
import Categories from './pages/categories';
import Category from './components/category'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'categories'} element={<Categories />} />
        <Route path={'categories/:categoryId'} element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
