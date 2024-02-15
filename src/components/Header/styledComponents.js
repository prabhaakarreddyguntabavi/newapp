import styled from "styled-components";

export const HeaderMainContainer = styled.div`
  display: flex;
  // width: 79vw;
  padding: 24px 40px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 5vh;

  @media screen and (max-width: 1024px) {
    // width: 92%;
  }

  @media screen and (max-width: 768px) {
    // width: 100vw;
    padding: 0px;
    height: 8vh;
    justify-content: space-between;
  }
`;

export const AddTransactionButton = styled.button`
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

  @media screen and (max-width: 768px) {
    display: none;
  }
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AddTransctionMainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  overflow: auto;
`;

export const AddTransctionContainer = styled.form`
  width: 466px;
  // height: 80vh;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  margin: auto;
  aline-self: center;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 90vw;
    // height: 75vh;
  }
`;

export const AddTransctionButton = styled.button`
  display: flex;
  width: 418px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Primary-3, #2d60ff);
  border-width: 0px;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  text-align: center;

  /* text-sm / leading-5 / font-medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export const AddTransctionTextContainer = styled.div`
  display: flex;
`;

export const HeadingTextContainer = styled.div`
  margin-top: 32px;
  margin-left: 24px;
  margin-bottom: 20px;
`;

export const AddTransctionHeading = styled.h1`
  color: #333b69;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;

export const AddTransctionParagraph = styled.p`
  width: 289px;
  color: #505887;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-top: 8px;
`;

export const AddTransctionCloseImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-left: auto;
  // margin-top: 15px;
  margin-right: 10px;
`;

export const AddTransctionInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`;

export const AddTransctionLabel = styled.label`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AddTransctionNameInput = styled.input`
  width: 390px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dfeaf2;
  background: #fff;
  padding: 16px;
  @media screen and (max-width: 768px) {
    width: 75vw;
  }
`;

export const SelectTransctionType = styled.select`
  width: 418px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dfeaf2;
  background: #fff;
  padding-right: 22px;
  color: #718ebf;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const SelectTransctionOptions = styled.option``;

export const LoadingContainer = styled.div`
  margin: auto;
`;

export const MobileLogoImage = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 40%;
    margin-left: 10px;
  }
`;
export const MobileHeaderProfile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 35px;
    height: 45px;
    margin-left: 10px;
    border-radius: 200px;
    margin-right: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;
export const MobilePopupContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-shrink: 0;
    background: rgba(52, 64, 84, 0.7);
    backdrop-filter: blur(8px);
  }
`;

export const MobileParagraph = styled.p`
  font-size: 25px;
`;

export const MobileAddTransactions = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.disabled ? "none" : "flex")};
    padding: 8px 12px;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    // background: #2d60ff;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-width: 0px;
  }
`;

export const ErrorMessageParagraph = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 30px;
  margin-top: 7px;
`;

export const ErrorMessage = styled.p``;

export const NotificationMessage = styled.p`
  font-size: 10px;
  margin: 0px;
`;
