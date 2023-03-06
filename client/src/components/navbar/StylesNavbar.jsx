import styled from 'styled-components'

export const ComponentContainer = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #38343f;

  .buttonsContainer {
    width: 25rem;
    display: flex;
    justify-content: center;
    gap: 5rem;

    .button {
      cursor: pointer;
      text-decoration: none;
      color: white;
      border: 3px solid transparent;

      &:hover {
        color: #E94560;
        border-bottom: 3px solid #E94560;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 0;
      align-items: baseline;
      margin-left: 15px;
      width: 15rem;
    }
  }

  .searchBar {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
  }
`