import React from 'react';
import { PageHero } from 'components';
import Wrapper from 'pages/AboutPage/AboutPageWrapper';
import image from 'assets/images/banner2.jpg';

const AboutPage = () => (
  <>
    <PageHero title="about" />

    <Wrapper className="section-center">
      <div className="content">
        <div className="image">
          <img src={image} alt="pic" />
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nemo, dolorem sequi rem.
          Accusamus placeat voluptate, sit optio incidunt quis facere, eius itaque rerum quaerat
          minima ratione, vitae. Debitis fugit dignissimos deserunt, dicta, illum ullam. Voluptate
          nihil, voluptatibus unde quae, inventore natus ullam velit fugiat a libero reprehenderit
          aliquam! Distinctio, quisquam, reiciendis, a et asperiores id explicabo officiis earum ad
          illum illo voluptates culpa ratione atque! Laborum laudantium eligendi culpa quos
          voluptatem, vero, sunt consequuntur, perspiciatis temporibus exercitationem at ipsum
          pariatur dicta accusantium itaque fugit corrupti aspernatur nam illum consectetur,
          quaerat! Itaque consequuntur cumque commodi reprehenderit eum eius, quia eligendi.
        </div>
      </div>
    </Wrapper>
  </>
);

export default AboutPage;
