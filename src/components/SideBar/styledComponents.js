import styled from "styled-components";

export const SideBarMainContainer = styled.div`
  width: 15vw;
  min-width: 206px;
  height: 100%;
  flex-shrink: 0;
  border-right: 1px solid #e2e2e2;
  background: #fff;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 7vw;
    height: 99vh;
    min-width: 0px;
  }

  @media screen and (max-width: 768px) {
    display: none;
    min-width: 0px;
  }
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
  width: 210px;
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
  @media screen and (max-width: 1024px) {
    width: 20vw;
  }
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

  @media screen and (max-width: 1024px) {
    padding: 0px;
  }
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
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ProfileImageContainerMedium = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  @media screen and (max-width: 1024px) {
    display: flex;
    margin-top: 10px;
    margin-right: 8px;
  }
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
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ProfileLogoutImage = styled.img`
  width: 20px;
  height: 20px;
  // position: absolute;
  right: 16px;
  bottom: 20px;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  margin-left: auto;
  border-width: 0px;
  background-color: transparent;
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

export const LogoutConformationContainer = styled.div`
  width: 591px;
  height: 188px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  margin: auto;
  aline-self: center;

  /* Shadow / lg */
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.05),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const WarningImageContainer = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  background-color: #fef3c7;
  border-radius: 40px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  aline-items: center;
  margin-top: 32px;
`;

export const WarningImage = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  align-self: center;
  // margin-top: 17px;
  // margin-left: 20px;
`;

export const TestContainer = styled.div`
  display: flex;
`;

export const TextImageContainer = styled.div``;

export const HeaderTextImageContainer = styled.div``;

export const LogoutHeading = styled.h1`
  color: #333b69;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-top: 32px;
  line-height: 28px; /* 140% */
`;

export const LogoutClosingImage = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin: 10px 0px 10px 55px;
`;

export const LogoutParagraph = styled.p`
  color: #505887;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
`;

export const CancelLogoutButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: #fff;
  margin-top: 32px;
  color: #333b69;
  text-align: center;
  margin-bottom: 32px;

  /* text-sm / leading-5 / font-medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

export const YesLogoutButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #dc2626;
  border-width: 0px;
  margin-right: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: 112px;
  color: #fff;
  text-align: center;
  /* text-sm / leading-5 / font-medium */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
