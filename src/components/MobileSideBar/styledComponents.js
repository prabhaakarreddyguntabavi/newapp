import styled from "styled-components";

export const SideBarMainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  border-right: 1px solid #e2e2e2;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
export const IconsImage = styled.img`
  width: 25px;
  height: 25px;
`;

export const TransactionIconsImage = styled.img`
  width: 25px;
  height: 25px;
  // margin-left: 20px;
`;

export const TextParagraph = styled.p`
  color: ${(props) =>
    props.selectOption ? "var(--Primary-3, #2d60ff)" : "#505887"};
  /* Heading three medium 18p */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
`;

export const EachTextContainer = styled.div`
  display: flex;
  width: 50vw;
  height: 60px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  // margin-left: 20px;
`;

export const TextContainer = styled.div`
  width: 207px;
  height: 171px;
  flex-shrink: 0;
  margin-top: 49px;
`;

export const LogoImage = styled.img`
  display: inline-flex;
  align-items: center;
  margin: 20px;
`;

export const SelectedContainer = styled.div`
  width: 6px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 0px 10px 10px 0px;
  background-color: ${(props) =>
    props.selectOption ? "var(--Primary-3, #2d60ff)" : "#ffffff"};
`;

export const ProfileContainer = styled.div`
  margin-top: auto;
  display: flex;
  padding: 24px 32px 0px 24px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-top: 1px solid #eaecf0;
  padding-bottom: 10px;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

export const ProfileName = styled.h1`
  color: #505887;
  /* Text sm / Semibold */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin: 0px;
  width: 100px;
  overflow: hidden;
`;

export const ProfileEmail = styled.p`
  color: #718ebf;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin: 0px;
  width: 150px;
  overflow: hidden;
`;

export const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10px;
`;

export const YesLogoutButton = styled.button`
  // display: flex;
  // padding: 8px 16px;
  border-radius: 8px;
  // border-width: 0px;
  height: 40px;
  margin-left: auto;
  margin-right: -20px;
`;

export const MobileSideBarClosing = styled.img`
  width: 5%;
  height: 35%;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
`;

export const PopupClosingContainer = styled.div`
  display: flex;
`;
