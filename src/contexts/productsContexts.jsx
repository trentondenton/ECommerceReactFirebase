import { createContext } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const value = {
    products: PRODUCTS,
  };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
