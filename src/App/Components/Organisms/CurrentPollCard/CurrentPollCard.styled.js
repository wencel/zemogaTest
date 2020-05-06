import styled from "styled-components";

export const Container = styled.div`
  display: block;
  margin: 0 130px;
  @media (min-width: 1260px) {
    margin: 0 auto;
    width: 1000px;
  }
  @media (max-width: 991px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 540px) {
    width: 100%;
    margin: 40px 20px;
  }
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
  @media (max-width: 991px) {
    h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 540px) {
    width: auto;
  }
`;
export const BlurryCard = styled.div`
  width: 370px;
  height: 300px;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    background-image: url(https://storage.googleapis.com/zemogatest/Pope.png);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    top: -20px;
    right: -20px;
    left: -20px;
    bottom: -20px;
    position: absolute;
    filter: blur(40px);
  }
  &:after {
    content: "";
    background-color: #0000004a;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: absolute;
  }
  @media (max-width: 991px) {
    max-width: 370px;
    width: 100%;
    margin: auto;
    &:before {
      content: "";
      background-image: none;
      background: linear-gradient(0deg, #000000b8, #00000040);
      top: -20px;
      right: -20px;
      left: -20px;
      bottom: -20px;
      position: absolute;
      filter: blur(40px);
    }
    &:after {
      content: "";
      background: none;
      position: relative;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 370px;
  button {
    height: 50px;
    border: none;
    opacity: 0.8;
    cursor: pointer;
    transition: 0.2s;
    &:focus {
      outline: none;
    }
    &.likeButton {
      background-color: #1cbbb4;
    }
    &.dislikeButton {
      background-color: #ffad1d;
    }
    &:hover {
      opacity: 1;
    }
    img {
      height: 25px;
    }
  }
  @media (max-width: 991px) {
    max-width: 370px;
    width: 100%;
    margin: auto;
  }
`;
