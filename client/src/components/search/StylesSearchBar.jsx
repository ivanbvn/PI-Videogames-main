import styled from 'styled-components'

export const InputContainer = styled.div `
  position: relative;

  &:hover input{
    width: 240px;
  }

  input:focus {
    width: 240px;
  }

  .searchInput {
    width: 0px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 16px;
    color: black;
    padding: 5px 15px;
    border-radius: 5px;
    transition: all 0.6s ease;
  }

  .btn {
    position: absolute;
    width: 55px;
    height: 55px;
    line-height: 55px;
    right: -10px;
    top: -7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E94560;
    color: white;
    font-size: 30px;
    border-radius: 50px;
    cursor: pointer;
  }
`