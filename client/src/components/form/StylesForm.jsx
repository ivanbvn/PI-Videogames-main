import styled from 'styled-components'

export const ComponentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  backdrop-filter: blur(5px);
`

export const FormContainer = styled.div`
  opacity: 1;
  border-radius: 10px;
  background-color: #eeeeeedc;
  width: 500px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
  backdrop-filter: blur(4px);
  box-shadow:
  2.8px 2.8px 2.2px rgba(0, 0, 0, 0.104),
  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.149),
  12.5px 12.5px 10px rgba(0, 0, 0, 0.185),
  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.221),
  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.266),
  100px 100px 80px rgba(0, 0, 0, 0.37)
;

  @media (max-width: 700px) {
    width: 300px;
  }
`

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  button {
    width: 2.2rem;
    height: 2.2rem;
    font-size: 18px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    color: #E94560;

    &:hover {
      background-color: #E94560;
      color: black;
    }
  }
`

export const SubmitButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 215px;

  button {
    width: 5rem;
    height: 2rem;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: #5d976b;

    &:hover {
      background-color: #5d976b;
      color: white;
    }

    &:disabled {
      background-color: #a1a1a1;
      color: #707070;
      cursor: auto;

      &:hover {
        background-color: #a1a1a1;
        color: #707070;
        cursor: auto;
      }
    }
  }

  @media (max-width: 700px) {
    right: 115px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  label {
    color: black;
    font-weight: 600;

    &.error {
      color: red;
    }
  }
  
  input {
    height: 2rem;
    border-radius: 4px;
    padding: 0 12px;
    border: none;
    /* border: 2px solid white; */

    &:focus {
      outline: none;
      border-color: #6d36ce;
    }

    &.error {
      border: 2px solid red;
    }
  }

  textarea {
    height: 110px;
    border-radius: 4px;
    padding: 10px 15px;
    border: none;

    &:focus {
      outline: none;
      border: none;
    }

    &.error {
      border: 2px solid red;
    }
  }

  select {
    height: 2rem;
    border-radius: 4px;
    padding: 0 12px;
    border: none;

    &:focus {
      outline: none;
      border: none;
    }

    &.error {
      border: 2px solid red;
    }
  }

  span {
    font-size: 14px;
    color: red;
  }
`

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  margin: 70px 0;
`

export const SelectedGenresContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 90px 90px 90px 90px;
  gap: 10px;
  margin-top: 4px;
`

export const GenreSpan = styled.div`
  font-size: 14px;
  width: 100%;
  color: black;
  background-color: #c2c2c2;
  padding: 1px 5px;
  /* gap: 8px; */
  /* padding-left: 8px; */
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 12px;
    border: none;
    background-color: transparent;
    color: black;
    display: flex;
    align-items: center;
  }

  .icon {
    pointer-events: none;
  }
`