import styled from "styled-components";

export const SubmitContaner = styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 40px 130px;
  position: relative;
  background-color: #ffffffb3;
  align-items: center;
  height: 80px;
  &::before {
    content: "";
    background-image: url("https://storage.googleapis.com/zemogatest/crowd.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    position: absolute;
  }
  h2 {
    font-weight: 300;
    font-size: 28px;
    margin: 0;
  }
  @media (min-width: 1260px) {
    margin: 40px auto;
    width: 960px;
  }
  @media (max-width: 991px) {
    width: auto;
    max-width: 460px;
    margin: 40px auto;
    flex-direction: column;
    height: auto;
    padding: 23px;
    text-align: center;
    h2 {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
  @media (max-width: 540px) {
    margin: 40px 20px;
    width: auto;
  }
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 50px;
  border: 3px solid #000;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #ffffff8f;
  }
`;
