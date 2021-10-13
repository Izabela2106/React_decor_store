import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from 'components/Hero/HeroWrapper';

const Hero = () => (
  <Wrapper>
    <section className="section">
      <div className="banner">
        <Link className="btn goShopbtn" to="/products">
          Shop now
        </Link>
      </div>
    </section>
  </Wrapper>
);

export default Hero;
