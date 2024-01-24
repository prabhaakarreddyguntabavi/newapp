import styled from "styled-components";

export const TransactionHomePage = styled.div`
  width: 1190px;
  height: 960px;
  background: #f5f7fa;
  display: flex;
`;

export const TransactionTotalBodyContainer = styled.div``;

export const TransactionBodyContainer = styled.div`
  width: 1270px;
  background: #f5f7fa;
  overflow: auto;
  min-height: 850px;
`;

export const TransctionsContainer = styled.div`
  display: flex;
  width: 1110px;
  //   height: 210px;
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

export const DachTransctionContainer = styled.div`
  width: 1061px;
  height: 58px;
  flex-shrink: 0;
  border-bottom: 1px solid #e2e2e2;
  margin-left: 24px;
  margin-right: 25px;
  display: flex;
  //   justify-content: space-between;
  align-items: center;
`;

export const CrediteDebitImage = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  margin-right: 16px;
`;

export const EditImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 20px;
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

export const CrediteDebitAmount = styled.p`
  color: #fe5c73;
  text-align: right;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 80px;
`;

export const SelectFilterConditions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding-left: 40px;
  margin-bottom: 32px;
  background: #fff;
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
`;

export const TransactionCategory = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 306px;
`;

export const TransactionDate = styled.p`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 96px;
`;

export const TransactionAmount = styled.div`
  color: #343c6a;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 195px;
`;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;

// export const TransctionBodyContainer = styled.div``;
