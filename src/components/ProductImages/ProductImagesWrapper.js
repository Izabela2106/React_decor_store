import styled from 'styled-components';

const Wrapper = styled.section`
  width: 500px;
  margin: 1rem;
  max-width: var(--max-width);

  @media (max-width: 1050px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main {
    height: 600px;
    @media (max-width: 600px) {
      height: 400px;
    }
  }
  img {
    width: 100%;
    height: inherit;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 1rem;
    width: 100%;
    img {
      height: 100px;
      cursor: pointer;
    }
    @media (max-width: 750px) {
      grid-template-columns: repeat(3, 30vw);
      justify-content: center;
      height: 250px;

      img {
        height: 100px;
      }
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 90vw);
      height: 1250px;
      align-items: center;
      justify-content: center;

      img {
        height: 200px;
        max-width: 90vw;
      }
    }
    .active {
      opacity: 0.5;
    }

    @media (max-width: 600px) {
      .main {
        height: 200px;
      }
      .gallery {
        img {
          height: 40px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .main {
      height: 400px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export default Wrapper;
