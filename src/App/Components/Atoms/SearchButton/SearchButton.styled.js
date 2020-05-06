import styled from "styled-components";
export const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  input {
    width: ${({ show }) => (show ? "150px" : "0")};
    padding: 4px 0;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    margin-left: ${({ show }) => (show ? "15px;" : "0")};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    transition: 0.2s;
    padding-right: ${({ show }) => (show ? "15px" : "0")};
    font-family: Lato;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 991px) {
    padding: 10px;
    input {
      border-color: #333;
      color: #333;
    }
  }
`;
export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.closeButton {
    display: ${({ show }) => (show ? "flex" : "none")};
    position: absolute;
    right: 0;
    font-size: 20px;
    padding: 0;
  }
  @media (max-width: 991px) {
    color: #333;
    img {
      filter: invert(1);
    }
  }
`;
