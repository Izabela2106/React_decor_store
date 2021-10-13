import styled from 'styled-components';
import banner from 'assets/images/banner.jpg';

const Wrapper = styled.section`
  min-height: 60vh;
  place-items: center;
  display: flex;
  justify-content: center;
  .img-container {
    display: none;
  }

  .banner {
    width: 95vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${banner});
    background-size: cover;
  }

  .goShopbtn {
    height: 5rem;
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export default Wrapper;
