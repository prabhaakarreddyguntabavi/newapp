import styled from "styled-components";

export const ProfileHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f7fa;
  display: flex;
`;

export const ProfileTotalBodyContainer = styled.div`
  width: 100%;
`;

export const LoadingContainer = styled.div`
  margin: auto;
`;

export const ProfileDetailsContainer = styled.div`
  background: #f5f7fa;
  padding-top: 32px;
  // height: 85vh;
  overflow: auto;
  @media screen and (max-width: 768px) {
    height: 83%;
  }
`;

export const ProfileContainer = styled.div`
  min-height: 40vw;
  width: 80vw;
  flex-shrink: 0;
  border-radius: 25px;
  background: #fff;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;

  @media screen and (max-width: 1000px) {
    margin-left: 15px;
    width: 90vw;
    // max-height: 75vw;
  }
  @media screen and (max-width: 768px) {
    margin-left: 15px;
    width: 97vw;
    // max-height: 144vw;
  }
`;

export const ProfileImage = styled.div`
  border-radius: 1000px;
  margin: auto;
  text-align: center;
  font-size: 120px;
  @media screen and (max-width: 768px) {
    font-size: 65px;
  }
`;

export const ProfileImageContainer = styled.div`
  height: 200px;
  width: 200px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  text-align: center;
  border-radius: 1000px;
  display: flex;
  margin-top: 45px;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
    margin-top: 15px;
  }
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
    gap: 5px;
    margin-left: 0px;
    margin-right: 0px;
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
  width: 27vw;
  height: 15px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #dfeaf2;
  background: #fff;
  padding: 16px;
  color: #718ebf;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (max-width: 768px) {
    width: 75vw;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  margin-top: 48px;
  flex-wrap: wrap;
  justify-content: center;
  overflow: auto;
`;

// export const TransctionBodyContainer = styled.div``;
