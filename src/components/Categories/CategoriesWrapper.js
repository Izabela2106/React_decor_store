import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);

  .categories {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
  }
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 200px;
    background-size: cover;
  }

  .category {
  }

  .shop-btn {
    top: 50%;
    z-index: 10;
    display: block;
  }

  .fillers {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    justify-content: center;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .filler {
        width: 90vw;
      }
    }
  }
  .filler {
    margin: 0 3rem;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
  .hr {
    background: var(--dark-olive-green);
    width: 70px;
    height: 2px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 30px;
    text-align: center;
  }

  h3.upper {
    text-transform: uppercase;
    color: var(--dark-olive-green);
    font-size: 20px;
  }

  @media (min-width: 750px) {
    .categories {
      grid-template-columns: 1fr 1fr;
    }

    .category {
      width: 45vw;
      height: 200px;
    }
  }

  @media (min-width: 992px) {
    .category {
      width: 30vw;
      height: 200px;
    }

    .filler {
      width: 25vw;
    }
    .fillers {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .categories {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .section-center {
      width: 95vw;
    }
  }
`;

export default Wrapper;
