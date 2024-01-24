import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import TransctionContext from "../../context/TransctionContext";

import {
  SideBarMainContainer,
  LogoImage,
  TextContainer,
  EachTextContainer,
  IconsImage,
  TextParagraph,
  TransactionIconsImage,
  SelectedContainer,
  ProfileContainer,
  ProfileImageContainer,
  ProfileName,
  ProfileEmail,
  ProfileLogoutImage,
  ProfileTextContainer,
  LogoutButton,
  LogoutConformationContainer,
  LogoutContainer,
  WarningImageContainer,
  WarningImage,
  TextImageContainer,
  HeaderTextImageContainer,
  LogoutHeading,
  LogoutClosingImage,
  LogoutParagraph,
  TestContainer,
  LogoutButtonContainer,
  CancelLogoutButton,
  YesLogoutButton,
} from "./styledComponents";

import "./index.css";

const SideBar = () => (
  <TransctionContext.Consumer>
    {(value) => {
      const { selectOption, onChangeSelectOption } = value;

      return (
        <SideBarMainContainer>
          <LogoImage
            src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705580146/Frame_507_ba197a.png"
            alt="website logo"
          />
          <TextContainer>
            <Link
              className="sidbar-content"
              to="/"
              onClick={() => onChangeSelectOption("DASHBOARD")}
            >
              <EachTextContainer>
                <SelectedContainer selectOption={selectOption === "DASHBOARD"}>
                  {}
                </SelectedContainer>
                <IconsImage
                  src={
                    selectOption === "DASHBOARD"
                      ? "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706070137/home_2_1_xkaadl.png"
                      : "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705730106/home_2_m9drn7.png"
                  }
                  alt="dashboard"
                />
                <TextParagraph selectOption={selectOption === "DASHBOARD"}>
                  Dashboard
                </TextParagraph>
              </EachTextContainer>
            </Link>
            <Link
              className="sidbar-content"
              to="/transaction"
              onClick={() => onChangeSelectOption("TRANSACTION")}
            >
              <EachTextContainer>
                <SelectedContainer
                  selectOption={selectOption === "TRANSACTION"}
                ></SelectedContainer>
                <TransactionIconsImage
                  src={
                    selectOption === "TRANSACTION"
                      ? "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706070137/transfer_1_1_hqx4fr.png"
                      : "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705912310/transfer_1_e0it36.png"
                  }
                  alt="transaction"
                />

                <TextParagraph selectOption={selectOption === "TRANSACTION"}>
                  Transaction
                </TextParagraph>
              </EachTextContainer>
            </Link>
            <Link
              className="sidbar-content"
              to="/"
              onClick={() => onChangeSelectOption("PROFILE")}
            >
              <EachTextContainer>
                <SelectedContainer
                  selectOption={selectOption === "PROFILE"}
                ></SelectedContainer>
                <IconsImage
                  src={
                    selectOption === "PROFILE"
                      ? "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706070137/user_3_1_1_h8fxdm.png"
                      : "https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705912309/user_3_1_ikruwf.png"
                  }
                  alt="profile"
                />
                <TextParagraph selectOption={selectOption === "PROFILE"}>
                  Profile
                </TextParagraph>
              </EachTextContainer>
            </Link>
          </TextContainer>
          <ProfileContainer>
            <ProfileImageContainer>P</ProfileImageContainer>
            <ProfileTextContainer>
              <ProfileName>Prabhakar</ProfileName>
              <ProfileEmail>Prabha@gmail.com</ProfileEmail>
            </ProfileTextContainer>
            <Popup
              modal
              trigger={
                <LogoutButton type="button">
                  <ProfileLogoutImage
                    src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706074414/log-out-01_yllnww.png"
                    alt="logout"
                  />
                </LogoutButton>
              }
            >
              {(close) => (
                <LogoutContainer>
                  <LogoutConformationContainer>
                    <TestContainer>
                      <WarningImageContainer>
                        <WarningImage
                          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706080360/log-out-01_1_wtsz63.png"
                          alt="logout"
                        />
                      </WarningImageContainer>
                      <TextImageContainer>
                        <HeaderTextImageContainer>
                          <LogoutHeading>
                            Are you sure you want to Logout?
                          </LogoutHeading>
                          <LogoutParagraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed
                          </LogoutParagraph>
                        </HeaderTextImageContainer>
                      </TextImageContainer>
                      <LogoutClosingImage
                        onClick={() => close()}
                        src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
                        alt="close"
                      />
                    </TestContainer>
                    <LogoutButtonContainer>
                      <YesLogoutButton
                        type="button"
                        // onClick={onClickLogout}
                      >
                        Yes, Logout
                      </YesLogoutButton>
                      <CancelLogoutButton
                        type="button"
                        className="trigger-button"
                        data-testid="close"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelLogoutButton>
                    </LogoutButtonContainer>
                  </LogoutConformationContainer>
                </LogoutContainer>
              )}
            </Popup>
          </ProfileContainer>
        </SideBarMainContainer>
      );
    }}
  </TransctionContext.Consumer>
);

export default SideBar;
