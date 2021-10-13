import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  width: 80vw;
  .center {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1050px) {
      flex-direction: column;
    }
  }

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 500px;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 700;
    }
    @media screen and (max-width: 1050px) {
      width: 90vw;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default Wrapper;
