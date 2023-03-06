import styled from 'styled-components'

export const ComponentContainer = styled.div`
  height: 1045px;
  background-image: url(https://i.imgur.com/c9totyN.jpeg);
  background-attachment: fixed;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`

export const Container = styled.div`
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .centerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .subtitleContainer {
      color: #e244d2;
      text-shadow: 3px 3px 5px #272727;
      font-size: 2.8rem;
    }
  
    .buttonContainer {
      button {
        cursor: pointer;
        width: 12rem;
        height: 3.2rem;
        font-size: 1.8rem;
        font-weight: 700;
        border: none;
        background-color: #222222;
        transition: ease 0.3s;
        color: white;
  
        &:hover {
          color: #e440d3;
        }
      }
    }
  }
`