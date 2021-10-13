import React from 'react';
import { AiOutlineBulb, AiFillCar } from 'react-icons/ai';
import { GiOfficeChair, GiShoppingBag } from 'react-icons/gi';
import Wrapper from 'components/Services/ServicesWrapper';

const Service = () => (
  <Wrapper>
    <div className="services">
      <div className="service">
        <AiOutlineBulb className="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur
          praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe
          numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem
          blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum
          sequi ex, maiores omnis sed.
        </p>
      </div>

      <div className="service">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur
          praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe
          numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem
          blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum
          sequi ex, maiores omnis sed.
        </p>

        <AiFillCar className="logo" />
      </div>
      <div className="service">
        <GiOfficeChair className="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur
          praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe
          numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem
          blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum
          sequi ex, maiores omnis sed.
        </p>
      </div>

      <div className="service">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At officia consectetur
          praesentium temporibus quisquam facere incidunt eveniet magni hic iste vitae, aut, saepe
          numquam, maxime iusto dolores impedit. Omnis, cum, soluta. Consequuntur natus quidem
          blanditiis vero amet, esse odio debitis harum, delectus consequatur inventore nostrum
          sequi ex, maiores omnis sed.
        </p>

        <GiShoppingBag className="logo" />
      </div>
    </div>
  </Wrapper>
);

export default Service;
