import styled from 'styled-components';

const Wrapper = styled.section`
  @media screen and (min-width: 992px) {
    .section-center {
      width: 95vw;
    }
  }
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  svg.logo {
    font-size: 200px;
    margin: 0 3rem;
  }

  .service {
    display: flex;
    justify-conent: center;
    align-items: center;
  }
  p {
    margin: 0 3rem;
  }

  @media (max-width: 800px) {
    .service {
      margin: 3rem 0;
      flex-direction: column;
    }
    p {
      order: 2;
      margin-top: 1rem;
    }

    path {
      height: 30rem;
      width: 30rem;
      margin: 0 3rem;
    }
  }
`;
export default Wrapper;
