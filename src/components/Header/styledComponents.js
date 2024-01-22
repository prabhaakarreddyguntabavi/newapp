import styled from "styled-components";

export const HeaderMainContainer = styled.div`
  display: flex;
  width: 1290px;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 35px;
`;

export const AddTransactionButton = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: #2d60ff;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-width: 0px;
`;

export const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonText = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
