import styled from "styled-components";

export const CardsComponent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 3rem;

  @media (max-width: 1800px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1400px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

