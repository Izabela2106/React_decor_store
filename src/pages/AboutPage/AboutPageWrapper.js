import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .content {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .image {
        margin-left: 0;
      }
      .text {
        margin: 2rem 0;
      }
    }
    @media screen and (max-width: 900px) {
      img {
        width: 90vw;
      }
    }
  }
  .image {
    margin-left: 2rem;
  }
  .text {
    margin: 0 3rem;
  }
  img {
    min-width: 200px;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
`;
export default Wrapper;
