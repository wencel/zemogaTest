import styled from "styled-components";

export const AlertContainer = styled.aside`
  background-color: #ebebeb;
  padding: ${({ visible }) => (visible ? "24px" : "0px")};
  color: #333333;
  margin: ${({ visible }) => (visible ? "35px 130px 0" : "0px")};
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 15px;
  align-items: center;
  padding-right: 50px;
  position: relative;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "150px" : "0px")};
  transition: 0.2s;
  h2 {
    margin: 0;
    text-align: center;
    font-size: 26px;
  }
  h5 {
    margin: 0;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
  }
  p {
    grid-row: span 2;
    margin: 0;
    font-weight: 300;
    font-size: 13px;
    @media (max-width: 991px) {
      order: 1;
      margin-top: 10px;
    }
  }
  @media (min-width: 1260px) {
    margin: ${({ visible }) => (visible ? "35px auto 0" : "0px")};
    width: 926px;
  }
  @media (max-width: 991px) {
    width: auto;
    margin: ${({ visible }) => (visible ? "20px auto" : "0px")};
    grid-template-columns: auto;
    max-width: 452px;
    height: auto;
    text-align: center;
    justify-content: space-between;
    padding-right: 24px;
  }
  @media (max-width: 540px) {
    margin: ${({ visible }) => (visible ? "35px 20px 0" : "0px")};
    width: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (max-width: 991px) {
    top: 12px;
  }
`;
