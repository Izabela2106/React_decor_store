import React, { useState } from 'react';
import Wrapper from 'components/Filters/FiltersWrapper';
import { useFilterContext } from 'contexts/FiltersContext/filter_context';

const Filters = () => {
  const [activeColor, setActiveColor] = useState(null);
  const { all_products, filters, updateFilters, clearFilters } = useFilterContext();
  let categories = all_products.map((item) => item.categories[0].name);
  categories = new Set(categories);
  categories = new Array(...categories);

  let colors = all_products.map((item) => item.variant_groups[0].options);
  colors = colors.flat(1);

  colors = colors.map((item) => item.name);

  colors = new Set(colors);
  colors = new Array(...colors);

  return (
    <Wrapper>
      <div className="filters-header">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="search"
            className="search-input"
            value={filters.text}
            onChange={updateFilters}
          />
        </form>

        <button className="clear-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
      <div className="filters">
        <div className="filter">
          <h5>Categories</h5>
          <div className="cat">
            <button name="category" className="category" onClick={updateFilters}>
              all
            </button>
            {categories.map((category, index) => (
              <button key={index} name="category" className="category" onClick={updateFilters}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter">
          <h5>Colors</h5>
          <div className="colors">
            <button
              name="color"
              className="color"
              data-color="all"
              onClick={(e) => {
                updateFilters(e);
                setActiveColor(e.target.getAttribute('data-color'));
                if (e.target.getAttribute('data-color') === 'all') {
                  setActiveColor(null);
                }
              }}
            >
              all
            </button>

            {colors.map((color, index) => (
              <button
                name="color"
                aria-label="color_change"
                data-color={color}
                className={color === activeColor ? 'color active' : 'color'}
                onClick={(e) => {
                  updateFilters(e);
                  setActiveColor(e.target.getAttribute('data-color'));
                  if (e.target.getAttribute('data-color') === 'all') {
                    setActiveColor(null);
                  }
                }}
                key={index}
                style={{ background: color }}
              />
            ))}
          </div>
        </div>
        <div className="filter">
          <h5>price</h5>
          <p className="price">price:{filters.price}$</p>
          <input
            type="range"
            name="price"
            onChange={updateFilters}
            max={filters.max_price}
            min={filters.min_price}
            value={filters.price}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;
