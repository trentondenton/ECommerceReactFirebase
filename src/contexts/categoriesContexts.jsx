import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebaseUtil';
// import SHOP_DATA from '../shop-data';

export const CategoryContext = createContext({
  categoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Add Items to Firebase
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  // Get Items from Firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
    console.log(getCategoriesMap);
  }, []);

  const value = {
    categoriesMap,
  };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
