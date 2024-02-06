import styled from "styled-components";

export const DashboardMainContainer = styled.div`
  width: 100vw;
  height: 98vh;
  background: #f5f7fa;
  display: flex;
`;

export const BodyContainer = styled.div`
  overflow: auto;
  width: 85vw;
  height: 88vh;

  @media screen and (max-width: 1000px) {
    width: 92vw;
    // background-color: #000;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    overflow: scroll;
  }
`;

export const BarChartContainer = styled.div`
  // width: 90vw;
  // height: 364px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-left: 40px;
`;

export const LastTransction = styled.h1`
  color: #333b69;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 40px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const BodyMainContainer = styled.div`
  background: #f5f7fa;
`;
