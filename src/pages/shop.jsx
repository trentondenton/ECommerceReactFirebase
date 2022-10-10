import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../components/categories/categoriesPreview';
import Category from '../components/categories/category';
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
