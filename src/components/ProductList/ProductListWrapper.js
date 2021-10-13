import styled from 'styled-components';

const Wrapper = styled.section`
  .Viewbtn {
    border: none;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .sort {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  }

  .Viewbtn:hover {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

export default Wrapper;
