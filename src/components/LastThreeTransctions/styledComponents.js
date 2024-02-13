import styled from "styled-components";

export const TransctionsContainer = styled.div`
  display: flex;
  width: 90%;
  //   height: 210px;
  padding: 12px 25px 8px 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-left: 40px;
  margin-top: 32px;

  @media screen and (max-width: 1000px) {
    width: 84vw;
    padding: 5px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-top: 0px;
    width: 96vw;
    padding: 0px;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 20vw; // ${(props) => (props.isAdmin ? "15vw" : "15vw")};
  @media screen and (max-width: 768px) {
    // overflow: hidden;
    width: ${(props) => (props.isAdmin ? "15vw" : "36vw")};
  }
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  width: 20vw; // ${(props) => (props.isAdmin ? "15vw" : "15vw")};

  @media screen and (max-width: 768px) {
    // overflow: hidden;
    width: ${(props) => (props.isAdmin ? "15vw" : "36vw")};
  }
`;

export const DachTransctionContainer = styled.div`
  width: 75vw;
  height: 58px;
  flex-shrink: 0;
  border-bottom: ${(props) => (props.length ? "" : "1px solid #e2e2e2")};
  margin-left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 80vw;
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 4px;
    width: 96vw;
    height: 70px;
  }
`;

export const CrediteDebitImage = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  padding-right: 16px;
  @media screen and (max-width: 768px) {
    padding-right: 8px;
    // display: none;
    width: 25px;
    height: 25px;
    padding-left: 8px;
    display: ${(props) => (props.isAdmin ? "none" : "block")};
  }
`;

export const EditImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 8px;
  }
`;

export const DeleteImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const TitleParagraph = styled.p`
  width: 174px;
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 80px;
`;

export const CategaryParagraph = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  // margin-right: 96px;
  width: 20vw;
  overflow: hidden;
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
  width: 10vw;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isAdmin ? "18vw" : "25vw")};
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
  width: 10vw;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: ${(props) => (props.isAdmin ? "18vw" : "25vw")};
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
`;

export const AddTransctionMainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
`;

export const AddTransctionContainer = styled.div`
  width: 466px;
  height: 700px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  margin: auto;
  aline-self: center;
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

export const UserProfileDetails = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 100vw;
  @media screen and (max-width: 768px) {
    width: 40vw;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const EditDeleteContainer = styled.div`
  width: 61px;
  @media screen and (max-width: 1350px) {
    width: 61px;
    display: ${(props) => (props.isAdmin ? "none" : "block")};
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
