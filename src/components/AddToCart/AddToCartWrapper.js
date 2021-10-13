import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(100vh - (20vh + 10rem));
  margin-top: 2rem;
  .color {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin: 2px;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 400px) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  .active {
    opacity: 0.4;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin: 0.5rem;
  }

  .amount-button {
    border: none;
    font-size: 2rem;
    margin: 0.5rem;
    cursor: pointer;
  }

  .amount {
    font-size: 2rem;
    font-weight: bold;
  }

  .cart-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default Wrapper;
