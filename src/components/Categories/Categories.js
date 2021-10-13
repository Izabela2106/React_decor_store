import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/Categories/CategoriesWrapper';
import { useFilterContext } from 'contexts/FiltersContext/filter_context';
import candles from 'assets/images/candles.jpg';
import pillows from 'assets/images/pillows.jpg';
import Lamps from 'assets/images/Lamps.jpg';
import flowerpots from 'assets/images/flowerpots.jpg';
import rugs from 'assets/images/rugs.jpg';
import cups from 'assets/images/cups.jpg';

const Categories = () => {
  const { updateFilters } = useFilterContext();

  const categories = [candles, pillows, Lamps, flowerpots, rugs, cups];

  const links = ['candles', 'pillows', 'Lamps', 'flowerpots', 'rugs', 'cups'];

  return (
    <Wrapper>
      <div className="fillers">
        <div className="filler">
          <div className="hr" />
          <h3>Customer Service</h3>
          <h3 className="upper">Contact us</h3>
          <p>
            Mon-Fri 9:00-18:00 <br />
            decor@gmail.com <br />
            Phone +48 789 908 546 <br />
          </p>
        </div>
        <div className="filler">
          <div className="hr" />
          <h3>Only authentic items</h3>
          <h3 className="upper">100% orginal products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, debitis.</p>
        </div>

        <div className="filler">
          <div className="hr" />
          <h3>Payment security</h3>
          <h3 className="upper">100% secure payment</h3>

          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>

      <div className="categories">
        {categories.map((item, index) => (
          <div
            key={index}
            data-name="category"
            className="category"
            style={{ backgroundImage: `url(${item})` }}
          >
            <Link className="btn shop-btn" name="category" onClick={updateFilters} to="/products">
              {links[index]}
            </Link>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Categories;
