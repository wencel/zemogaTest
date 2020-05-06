import styled from "styled-components";

export const Title = styled.h1`
  color: #333333;
  margin: 40px 130px;
  font-weight: 400;
  @media (min-width: 1260px) {
    margin: 40px auto;
    width: 1000px;
  }
  @media (max-width: 991px) {
    width: auto;
    margin: 40px auto;
    text-align: center;
  }
`;
