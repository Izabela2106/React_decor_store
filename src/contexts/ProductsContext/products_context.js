import React, { useContext, useEffect, useReducer } from 'react';
import reducer from 'reducers/products_reducer';
import { ProductsActions } from 'contexts/ProductsContext/ProductsActions';
import { commerce } from 'lib/commerce';

const initialState = {
  products_loading: false,
  products: [],
  products_error: false,
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext(undefined, undefined);
const {
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_START,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} = ProductsActions;

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_START });

    try {
      const response = await commerce.products.list();
      const { data } = response;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: GET_SINGLE_PRODUCT_START });

    try {
      let response;
      await commerce.products.retrieve(id).then((product) => {
        response = product;
      });
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => useContext(ProductsContext);
