import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;

  .cont {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50vw;
  }

  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
export default Wrapper;
