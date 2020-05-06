import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 400px;
  color: #fff;
  display: flex;
  align-items: flex-end;
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  p {
    margin-left: 37px;
    margin-right: 37px;
    font-size: 13px;
    font-weight: 300;
  }
  &::before {
    background: linear-gradient(0, #000000a3, transparent);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
  }
  & > div {
    width: 100%;
    z-index: 1;
  }
  @media (max-width: 991px) {
    max-width: 500px;
  }
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: flex-end;
  h5 {
    font-size: 25px;
    margin: 0;
    font-size: 40px;
    margin-right: 37px;
    font-weight: 400;
  }
`;

export const ReactionIcon = styled.figure`
  background-color: #1cbbb4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0;
  margin-right: 5px;
  margin-bottom: 9px;
  img {
    width: 17px;
  }
`;

export const DateContainer = styled.p`
  font-size: 10px;
  margin: 0;
  margin-left: 37px;
`;
