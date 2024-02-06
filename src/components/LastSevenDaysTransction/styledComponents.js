import styled from "styled-components";

export const LastTransction = styled.h1`
  color: #333b69;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 40px;
  margin-top: 20px;
`;

export const LastThreeTransctions = styled.table`
  display: flex;
  // width: 1160px;
  // height: 210px;
  padding: 12px 25px 8px 24px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-left: 40px;
`;

export const DachTransctionContainer = styled.tr`
  width: 1121px;
  height: 58px;
  flex-shrink: 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DebitImage = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-right: 16px;
`;

export const CrediteImage = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-right: 16px;
`;

export const EditImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const DeleteImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const TitleParagraph = styled.p`
  width: 317px;
  color: #505887;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 80px;
`;

export const CategaryParagraph = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 96px;
`;

export const DateOfTransctionParagraph = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 101px;
`;

export const DebitAmount = styled.p`
  color: #fe5c73;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 80px;
`;

export const CrediteAmount = styled.p`
  color: #16dbaa;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 80px;
`;

export const LoadingContainer = styled.div`
  margin: auto;
`;

export const NoTransactionsFountHeading = styled.h1`
  margin: auto;
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

export const AddTransctionInputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 20px;
`;
export const LogoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  background: rgba(52, 64, 84, 0.7);
  backdrop-filter: blur(8px);
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
`;
