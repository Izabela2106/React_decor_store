import React from 'react';
import GridView from 'components/GridView/GridView';
import { HiViewList, HiOutlineViewGrid } from 'react-icons/hi';
import ListView from 'components/ListView/ListView';
import { Sort } from 'components/index';
import Wrapper from 'components/ProductList/ProductListWrapper';
import { useFilterContext } from 'contexts/FiltersContext/filter_context';

const ProductList = () => {
  const { filtered_products, display_grid, displayGrid, displayList } = useFilterContext();

  return (
    <Wrapper>
      <section className="section-center">
        <div className="header">
          <div className="buttons">
            <button className="Viewbtn" onClick={displayList}>
              <HiViewList />
            </button>
            <button className="Viewbtn" onClick={displayGrid}>
              <HiOutlineViewGrid />
            </button>
          </div>
          <div className="sort">
            <Sort />
          </div>
        </div>
        {display_grid ? (
          <GridView products={filtered_products} />
        ) : (
          <ListView products={filtered_products} />
        )}
      </section>
    </Wrapper>
  );
};

export default ProductList;
