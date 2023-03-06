import styled from "styled-components";

export const PaginationComponent = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 630px) {
    .pageButton {
      display: none;
    }

    .selected {
      display: block;
    }
  }
`

export const PageButtonContainer = styled.div`

  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    font-size: 20px;
    background-color: #38343f;
    border: 1px solid black;
    border-radius: 5px;
    color: white;

    &:hover {
      border-color: #808080ca;
    }
  }

  .selected {
    border: 3px solid #E94560;

    &:hover {
      border: 3px solid #E94560;
    }
  }
`