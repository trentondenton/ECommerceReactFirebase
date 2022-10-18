import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/category/categorySelector';
import CategoryPreview from './categoryPreview';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
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
