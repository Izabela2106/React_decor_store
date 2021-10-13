import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from 'components/GridView/GridViewWrapper';

const GridView = ({ products }) => (
  <Wrapper>
    <section className="products-container">
      {products.map((product) => {
        const { media, name, id, price } = product;
        return (
          <div className="product-container" key={id}>
            <img src={media.source} alt="pi" />
            <Link className="singleLink" to={`/products/${id}`}>
              {' '}
              <FaSearch />{' '}
            </Link>
            <div className="footer">
              <h4>{name}</h4>
              <h4>{price.formatted_with_symbol}</h4>
            </div>
          </div>
        );
      })}
    </section>
  </Wrapper>
);

export default GridView;
