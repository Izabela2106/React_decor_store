import { FiltersActions } from 'contexts/FiltersContext/FiltersActions';

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

const filter_reducer = (state, action) => {
  if (action.type === DISPLAY_GRID) {
    return { ...state, display_grid: true };
  }

  if (action.type === DISPLAY_LIST) {
    return { ...state, display_grid: false };
  }

  if (action.type === SET_PRODUCTS) {
    let max_price = action.payload.map((item) => item.price.raw);
    max_price = Math.max(...max_price);

    return {
      ...state,
      all_products: [...action.payload],
      filters: { ...state.filters, max_price },
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;

    let tempProducts = [...filtered_products];

    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price.raw - b.price.raw);
    }
    if (sort === 'price-higest') {
      tempProducts = tempProducts.sort((a, b) => b.price.raw - a.price.raw);
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        color: 'all',
        price: state.filters.min_price,
      },
    };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, category, color, price } = state.filters;

    let tempProducts = [...all_products];

    if (text) {
      tempProducts = tempProducts.filter((item) => item.name.toLowerCase().includes(text));
    }

    if (category) {
      if (!(category === 'all')) {
        tempProducts = tempProducts.filter((item) => item.categories[0].name === category);
      }
    }

    if (color) {
      if (!(color === 'all')) {
        tempProducts = tempProducts.filter((item) => {
          let colors = item.variant_groups[0].options;
          colors = colors.map((i) => i.name);
          if (colors.includes(color)) {
            return item;
          }
          return null;
        });
      }
    }

    if (price) {
      tempProducts = tempProducts.filter((item) => item.price.raw <= price);
    }

    return { ...state, filtered_products: tempProducts };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
