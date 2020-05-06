import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dotted #ccc;
  margin: 40px 130px;
  @media (min-width: 1260px) {
    margin: 40px auto;
    width: 960px;
  }
  @media (max-width: 991px) {
    width: auto;
    margin: 40px auto;
    padding: 0 20px;
  }
  @media (max-width: 540px) {
    align-items: flex-start;
  }
`;

export const FooterUl = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  a,
  div {
    margin-right: 20px;
    font-size: 12px;
    text-decoration: none;
    color: #333333;
  }
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
export const FooterLi = styled.li`
  display: flex;
  align-items: center;
  img {
    width: 20px;
  }
  @media (max-width: 540px) {
    margin-bottom: 10px;
  }
`;
