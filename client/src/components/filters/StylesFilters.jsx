import styled from "styled-components";

export const FiltersComponent = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const DivFilter = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    height: 35px;
    font-size: 18px;
    font-weight: 500;
    width: 200px;
    text-align: center;
    background-color: #e64f68;
    border: 2px solid #d61333;
    color: #e7e7e7;
    outline: none;

    option {
      font-size: 18px;
      font-weight: 500;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
  }
`

export const ButtonDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: #dddddd;
    color: #e64f68;
    font-size: 16px;
    font-weight: 700;

    &:hover {
      color: black;
      background-color: #e64f68;
    }
  }
`