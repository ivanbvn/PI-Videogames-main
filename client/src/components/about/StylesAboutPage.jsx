import styled from 'styled-components'

export const ComponentContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  /* background-color: blue; */

  .tecnologiesTitle {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

  }

  .contactTitle {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  @media (max-width: 900px) {
    height: 100%;
    margin-top: 20px;

    .tecnologiesTitle {
      margin-top: 15px;
    }
  }
`

export const Title = styled.div`
  h1 {
    height: 5rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 5rem;
    color: transparent;

    &::before {
      content: attr(data-text);
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      border-right: 0.3rem solid black;
      color: #E94560;
      white-space: nowrap;
      overflow: hidden;
      animation: animate 2s linear;
    }

    @media (max-width: 670px) {
    font-size: 4rem;
    }

    @media (max-width: 500px) {
    font-size: 3rem;
    }
  }

  @keyframes animate {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`

export const Description = styled.div`
  width: 35rem;
  text-align: center;
  font-size: 25px;

  @media (max-width: 570px) {
    font-size: 20px;
    width: 20rem;
  }
`

export const TecnologiesContainer = styled.div`
  width: 40rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-around;
  font-weight: 400;

  .react {
    color: #61dbfb;
  }

  .redux {
    color: #764abc;
  }

  .reactRouter {
    color: #be2b2b;
  }

  .styledComponents {
    color: #b6922e;
  }

  .node {
    color: #3c873a;
  }

  .express {
    color: black;
  }

  .postgresql {
    color: #1d5caf;
  }

  .sequelize {
    color: #4d8de0;
  }

  @media (max-width: 650px) {
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 15px;
  }
`

export const TecnologieInfo = styled.div`
  cursor: default;
  width: 140px;
  text-align: center;
  margin-bottom: 15px;
  padding: 8px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #303030;
  border: 2px solid #4e4e4e;
`

export const TecnologieIcon = styled.div`

  .icon {
    width: 50px;
    height: 50px;
  }
`

export const TecnologieText = styled.div`

`

export const ContactContainer = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  .linkedinContact {
    &:hover {
      width: 200px;
    }
  }

  .githubContact {
    &:hover {
      width: 150px;
    }
  }

  .gmailContact {
    &:hover {
      width: 320px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 50px;
  height: 50px;
  align-items: center;
  border-radius: 15px;
  transition: ease-out 0.3s;
  overflow: hidden;
`

export const ContactIcon = styled.div`
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  .icon {
    width: 40px;
    height: 40px;
  }

  .linkedinIcon {
    color: #0077b5;
  }

  .githubIcon {
    color: #0d1117;
  }

  .gmailIcon {
    color: #ea4335;
  }
`

export const ContactText = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
  line-height: 50px;
`