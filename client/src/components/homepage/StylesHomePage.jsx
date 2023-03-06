import styled from 'styled-components'

export const ComponentContainer = styled.div`
  min-height: 90.4vh;
  background-color: #1c181d;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const PageSidebarAndMain = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MainComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;

  .modalButton {
    position: fixed;
    bottom: 50px;
    right: 52.5px;
    z-index: 1;

    button {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      background-color: #E94560;
      color: black;

      &:hover {
        background-color: #852636;
        color: #c2c2c2dc;
      }

      &:disabled {
        background-color: grey;
        cursor: auto;

        &:hover {
          background-color: grey;
          cursor: auto;
          color: black;
        }
      }

    }
  }
`

export const SidebarComponent = styled.div`
  color: white;
  background-color: #38343f;
  min-width: 350px;
  height: 30rem;
  display: flex;
  border-radius: 10px;
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin: 0 0 40px 0;    
  }
`