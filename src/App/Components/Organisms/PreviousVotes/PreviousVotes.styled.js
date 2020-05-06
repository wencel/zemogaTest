import styled from "styled-components";

export const VotesGrid = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin: 0 130px;
  @media (min-width: 1260px) {
    margin: 0 auto;
    width: 1000px;
  }
  @media (max-width: 991px) {
    width: auto;
    margin: auto 20px;
    grid-template-columns: auto;
    justify-items: center;
  }
`;
