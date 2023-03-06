import styled from 'styled-components'

export const CardComponent = styled.div`
  margin: 0 20px 0 15px;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  display: flex;
  border-radius: 10px;
  transition: all 0.2s ease;
  animation: fadeIn 0.8s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .cardLink {
    text-decoration: none;
    color: white;
  }

  .cardName {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    background-color: #313131c3;
  }

  &:hover {
    transform: scale(1.05);

    .infoContainer {
      z-index: 1;
    }
    .cardName {
      z-index: -1;
    }
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 300px;
    height: 300px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  opacity: 0.72;
  z-index: -1;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 24px;
`

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const RatingStars = styled.div`
  color: #e9e918;
  font-size: 25px;
`

export const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  li {
    list-style: none;
  }
`