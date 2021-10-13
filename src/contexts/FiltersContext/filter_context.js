import React, { useEffect, useContext, useReducer } from 'react';
import reducer from 'reducers/filter_reducer';

import { useProductsContext } from 'contexts/ProductsContext/products_context';
import { FiltersActions } from 'contexts/FiltersContext/FiltersActions';

const initialState = {
  all_products: [],
  filtered_products: [],
  display_grid: true,
  sort: 'name-a',
  filters: {
    price: 0,
    category: 'all',
    max_price: 0,
    min_price: 0,
    color: 'all',
    text: '',
  },
};

const FilterContext = React.createContext();
const {
  SET_PRODUCTS,
  SORT_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_FILTERS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  DISPLAY_GRID,
  DISPLAY_LIST,
} = FiltersActions;

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const displayGrid = () => {
    dispatch({ type: DISPLAY_GRID });
  };
  const displayList = () => {
    dispatch({ type: DISPLAY_LIST });
  };

  const updateFilters = (e) => {
    const { name } = e.target;
    let { value } = e.target;
    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = Number(value);
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const filterProducts = () => {
    dispatch({ type: FILTER_PRODUCTS });
  };

  const updateSort = (e) => {
    const { value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    filterProducts();
    dispatch({ type: SORT_PRODUCTS });
  }, [state.filters, state.sort]);

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, displayGrid, displayList, updateFilters, clearFilters, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => useContext(FilterContext);
