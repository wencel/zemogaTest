import styled from "styled-components";

export const TopSection = styled.section`
  height: 740px;
  background-image: url("https://storage.googleapis.com/zemogatest/Pope.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  position: relative;
  align-items: center;
  @media (max-width: 991px) {
    background-attachment: initial;
  }
`;
