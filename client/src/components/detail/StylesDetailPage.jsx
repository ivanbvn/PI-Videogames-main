import styled from 'styled-components'

export const ComponentContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50rem;
  /* margin: 20px 0; */
`

export const DetailContainer = styled.div`
  position: relative;
  width: 1250px;
  height: fit-content;
  padding: 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #E94560;
  margin: 20px 0;

  @media (max-width: 1230px) {
    flex-direction: column;
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 400px;
  }
`

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;

  button {
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #ffffff;
    background-color: #e01436;
    border: none;

    &:hover {
      background-color: #b41932;
    }

    .backIcon {
    pointer-events: none;
  }
  }
`

export const ImgContainer = styled.div`

  img {
    width: 500px;
    height: 600px;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: 700px) {
    width: 300px;
    height: 300px;
  }
  }
`

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2px;

    .ratingStar {
      color: #e9e918;
      font-size: 28px;
    }
  }
`
