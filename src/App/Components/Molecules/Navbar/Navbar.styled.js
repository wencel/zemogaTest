import styled from "styled-components";

export const NavbarComponent = styled.nav`
  padding: 0 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: linear-gradient(180deg, #00000080, transparent);
  color: #fff;
  position: absolute;
  width: calc(100% - 260px);
  z-index: 1;
  .hamburguerMenu {
    display: none;
  }
  @media (max-width: 991px) {
    padding: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    .hamburguerMenu {
      display: flex;
    }
  }
`;

export const NavbarTitle = styled.h1`
  font-size: 32px;
  margin: 0;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const NavbarUl = styled.ul`
  display: flex;
  margin: 0;
  height: 100%;
  padding: 0;
  align-items: center;
  @media (max-width: 991px) {
    &.dropdownMenu {
      flex-direction: column;
      width: 100%;
      position: absolute;
      background: #fff;
      top: 60px;
      height: auto;
      max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
      overflow: hidden;
      transition: 0.2s;
      a {
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;
      }
    }
  }
`;

export const NavbarLi = styled.li`
  list-style: none;
  height: 70%;
  transition: 0.2s;
  display: flex;
  &:hover {
    background-color: ${({ noBackground }) =>
      noBackground ? "transparent" : "#00000040"};
  }
  a {
    padding: ${({ noBackground }) => (noBackground ? "0" : "0 26px")};
    font-size: 14px;
    font-weight: 300;
    text-decoration: none;
    color: #fff;
    height: 100%;
    display: flex;
    align-items: center;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    img {
      width: 25px;
    }
  }
  @media (max-width: 991px) {
    width: 100%;
    justify-content: center;
    a {
      color: #333;
    }
  }
`;
