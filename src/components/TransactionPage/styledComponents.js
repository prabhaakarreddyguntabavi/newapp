import styled from "styled-components";

export const TransactionHomePage = styled.div`
  width: 99vw;
  height: 100vh;
  background: #f5f7fa;
  display: flex;
`;

export const TransactionTotalBodyContainer = styled.div``;

export const TransactionBodyContainer = styled.div`
  width: 84vw;
  background: #f5f7fa;
  overflow: auto;
  height: 86vh;

  @media screen and (max-width: 1000px) {
    width: 92vw;
  }

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 80vh;
  }
`;

export const TransctionsContainer = styled.table`
  display: flex;
  width: 95%;
  min-height: 80vh;
  //   height: 210px;
  padding: 12px 25px 8px 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-left: 40px;
  margin-top: 32px;

  @media screen and (max-width: 1000px) {
    margin-left: 20px;
    padding: 0px 0px 0px 12px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    margin-left: 5px;
    padding: 0px;
    width: 98%;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 20vw; // ${(props) => (props.isAdmin ? "15vw" : "15vw")};
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isAdmin ? "35vw" : "30vw")};
  }
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  width: 20vw; // ${(props) => (props.isAdmin ? "15vw" : "15vw")};
  @media screen and (max-width: 768px) {
    width: 30vw;
  }
`;

export const DachTransctionContainer = styled.tr`
  width: 100%;
  // height: 58px;
  flex-shrink: 0;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 93vw;
    margin-left: 10px;
  }
`;

export const HeadingDachTransctionContainer = styled.tr`
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 24px;
  margin-right: 25px;
  display: flex;
  // justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
  }

  @media screen and (max-width: 768px) {
    width: 93vw;
    margin-left: 10px;
  }
`;

export const CrediteDebitImage = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  padding-right: 16px;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isAdmin ? "none" : "block")};
  }
`;

export const EditImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const DeleteImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const TitleParagraph = styled.p`
  width: 15vw;
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 80px;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const CategaryParagraph = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 96px;
  width: ${(props) => (props.isAdmin ? "22vw" : "20vw")};
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isAdmin ? "28vw" : "20vw")};
  }
`;

export const DateOfTransctionParagraph = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 101px;
  width: 20vw;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SelectFilterConditions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding-left: 40px;
  // margin-bottom: 32px;
  background: #fff;

  @media screen and (max-width: 1000px) {
    // width: 97%;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
    width: 98%;
    padding-left: 10px;
  }
`;

export const TransctionSelectFilter = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 0px;
  background-color: transparent;
`;

export const SelectAllOption = styled.div`
  color: ${(props) => (props.transactionOption ? "#2d60ff" : "#718ebf")};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SelectedContainer = styled.div`
  width: 139px;
  height: 3px;
  border-radius: 10px 10px 0px 0px;
  background: ${(props) => (props.transactionOption ? "#2d60ff" : "#fff")};
`;

export const SelectOption = styled.div`
  width: 57px;
  color: ${(props) => (props.transactionOption ? "#2d60ff" : "#718ebf")};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SelectedCreditContainer = styled.div`
  width: 63px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  background: ${(props) => (props.transactionOption ? "#2d60ff" : "#fff")};
`;

export const TransactionName = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: ${(props) => (props.isAdmin ? "15vw" : "20.5vw")};
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 23vw;
  }

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isAdmin ? "30.5vw" : "30vw")};
  }
`;

export const TransactionCategory = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // margin-left: 114px;
  width: ${(props) => (props.isAdmin ? "16vw" : "21vw")};

  @media screen and (max-width: 1000px) {
    width: 21vw;
  }

  @media screen and (max-width: 768px) {
    width: 25vw;
    margin-left: 12px;
  }
`;

export const TransactionDate = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // margin-left: 120px;
  width: ${(props) => (props.isAdmin ? "15vw" : "20.5vw")};

  @media screen and (max-width: 1000px) {
    width: 22vw;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TransactionAmount = styled.div`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // margin-left: 195px;
  width: ${(props) => (props.isAdmin ? "10vw" : "15vw")};

  @media screen and (max-width: 768px) {
    width: 20vw;
  }
`;

export const LoadingContainer = styled.div`
  margin: auto;
`;

export const DebitAmount = styled.p`
  color: #fe5c73;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: ${(props) => (props.isAdmin ? "15vw" : "10vw")};
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 15vw;
  }

  @media screen and (max-width: 768px) {
    width: 20vw;
  }
`;

export const CrediteAmount = styled.p`
  color: #16dbaa;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: start;
  width: ${(props) => (props.isAdmin ? "15vw" : "10vw")};
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    width: 15vw;
  }

  @media screen and (max-width: 768px) {
    width: 20vw;
  }
`;

export const NoTransactionsFountHeading = styled.h1`
  margin: auto;
`;

export const LogoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
  margin: 0px;
`;

export const AddTransctionMainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
`;

export const AddTransctionContainer = styled.form`
  width: 466px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  margin: auto;
  aline-self: center;
  @media screen and (max-width: 768px) {
    width: 95vw;
    height: 95vh;
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
  margin-top: 24px;
  margin-right: 24px;
`;

export const AdminProfileContainer = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: red;
  text-align: center;
  height: 25px;
  padding-top: 5px;
  width: 30px;
  border-radius: 30px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  // margin-right: 10px;
`;

export const TransactionUserName = styled.p`
  width: 20vw;
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // margin-right: 170px;

  @media screen and (max-width: 1000px) {
    width: 20vw;
    margin-left: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 35vw;
    margin-left: 0px;
  }
`;

export const UserProfileDetails = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 100vw;
`;

export const TitleUserParagraph = styled.p`
  width: 153px;
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 89px;
`;

export const EditDeleteContainer = styled.div`
  width: 61px;
  margin-right: 20px;
  display: ${(props) => (props.isAdmin ? "none" : "block")};

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isAdmin ? "none" : "block")};
    width: ${(props) => (props.isAdmin ? "12vw" : "")};
    margin-right: 5px;
  }
`;

export const TransctionParagraphMobile = styled.p`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 12px;
    margin-top: 0px;
    color: #bfbfbf;
    font-weight: 400;
    font-weight: bold;
  }
`;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;
