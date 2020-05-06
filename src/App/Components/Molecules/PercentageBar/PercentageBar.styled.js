import styled from "styled-components";

export const BarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

export const BarSection = styled.div`
  position: relative;
  width: ${({ width }) => `${width}%`};
  display: flex;
  align-items: center;
  padding: 0 7px;
  justify-content: ${({ isLike }) => (isLike ? "flex-start" : "flex-end")};
  font-size: 30px;
  font-weight: 300;
  min-width: 90px;
  img {
    width: 26px;
    margin-right: ${({ isLike }) => (isLike ? "flex-start" : "flex-end")};
    margin-right: 7px;
  }
  &:before {
    content: "";
    background-color: ${({ isLike }) => (isLike ? "#1cbbb4" : "#ffad1d")};
    position: absolute;
    opacity: 0.7;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
