import styled from "styled-components";

export const OnFailureConrainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const OnFailureImage = styled.img`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export const OnFailureHeading = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const OnFailureParagraph = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const OnFailureRetryButton = styled.button`
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
