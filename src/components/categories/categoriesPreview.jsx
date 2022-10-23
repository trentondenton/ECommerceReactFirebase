import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  categoriesIsLoading,
} from '../../store/category/categorySelector';
import CategoryPreview from './categoryPreview';
import Spinner from '../spinner/spinner';
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(categoriesIsLoading);
  return (
    <div className='category-preview-container'>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(key => {
          const products = categoriesMap[key];
          return <CategoryPreview key={key} title={key} products={products} />;
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
