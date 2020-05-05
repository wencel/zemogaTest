import styled from "styled-components";

export const BarContainer = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LeftBar = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  padding: 0 10px;
  color: #fff;
  display: flex;
  background: #00000033;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  font-size: 12px;
  min-width: 67px;
`;
export const RightBar = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  padding: 0 10px;
  color: #464646;
  display: flex;
  background: #ffffff78;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 30px;
  min-width: 125;
  span {
    font-weight: 300;
    margin-left: 10px;
  }
`;

export const RightArow = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #0000008f;
  position: absolute;
  right: -5px;
`;
