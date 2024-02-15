import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 70vh;
  background-color: #ffffff;
  color: #000000;
  margin-top: auto;
  margin-bottom: auto;
  height: 100vh;
`;
export const NotFoundImage = styled.img`
  width: 40%;
`;

export const NotFoundHeading = styled.h1``;

export const NotFoundParagraph = styled.p`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BackToHomePage = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: ${(props) => (props.disabled ? "#dddddd" : "#2d60ff")};
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-width: 0px;
`;
