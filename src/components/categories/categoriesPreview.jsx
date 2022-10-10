import { useContext } from 'react';

import CategoryPreview from './categoryPreview';
import { CategoryContext } from '../../contexts/categoriesContexts';
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <div className='category-preview-container'>
      {Object.keys(categoriesMap).map(key => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
