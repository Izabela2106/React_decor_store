import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;
export default Wrapper;
