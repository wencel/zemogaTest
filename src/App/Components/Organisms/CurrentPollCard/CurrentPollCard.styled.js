import styled from "styled-components";

export const Container = styled.div`
  display: block;
`;

export const Card = styled.div`
  width: 300px;
  height: 230px;
  padding: 35px;
  position: absolute;
  color: #fff;
  z-index: 1;
  h1 {
    margin: 0;
    font-size: 45px;
    font-weight: 400;
  }
  h6 {
    margin: 0;
    font-size: 13px;
    font-weight: 200;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
  .veredictParagaph {
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 0;
  }
  a {
    color: #fff;
    font-size: 12px;
    font-weight: 200;
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      height: 10px;
    }
  }
`;
export const BlurryCard = styled.div`
  width: 370px;
  height: 300px;
  position: relative;
  overflow: hidden;
  :before {
    content: "";
    background-image: url(https://storage.googleapis.com/zemogatest/Pope.png);
    background-attachment: fixed;
    top: -20px;
    right: -20px;
    left: -20px;
    bottom: -20px;
    position: absolute;
    filter: blur(40px);
  }
  :after {
    content: "";
    background-color: #0000004a;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  button {
    height: 50px;
    border: none;
    opacity: 0.8;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &.likeButton {
      background-color: #1cbbb4;
    }
    &.dislikeButton {
      background-color: #ffad1d;
    }
    img {
      height: 25px;
    }
  }
`;
