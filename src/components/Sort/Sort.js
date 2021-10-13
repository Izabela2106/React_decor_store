import React from 'react';
import Wrapper from 'components/Sort/SortWrapper';
import { useFilterContext } from 'contexts/FiltersContext/filter_context';

const Sort = () => {
  const { filtered_products: products, sort, updateSort } = useFilterContext();

  return (
    <Wrapper>
      <p>{products.length} products found</p>
      <form>
        <label htmlFor="sort">sort by </label>
        <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
          <option value="price-lowest">price(lowest)</option>
          <option value="price-higest">price(higest)</option>
          <option value="name-a">name(a-z)</option>
          <option value="name-z">name(z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

export default Sort;
