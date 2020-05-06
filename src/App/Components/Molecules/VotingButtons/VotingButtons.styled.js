import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 37px;
`;

export const VoteButton = styled.button`
  background-color: ${({ isLike }) => (isLike ? "#1cbbb4" : "#ffad1d")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  outline: ${({ selected }) =>
    selected ? "2px solid #fff" : "2px solid transparent"};
  margin-right: 9px;
  transition: 0.2s;
  opacity: ${({ selected }) => (selected ? "1" : "0.8")};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  img {
    width: 17px;
  }
`;
export const VoteNowButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 40px;
  border: 1px solid #fff;
  transition: 0.2s;
  padding: 0 20px;
  cursor: pointer;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    background-color: #00000067;
  }
  img {
    width: 17px;
  }
`;
