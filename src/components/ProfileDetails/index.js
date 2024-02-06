import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import SideBar from "../SideBar";
import Header from "../Header";
import TransctionContext from "../../context/TransctionContext";

import {
  ProfileHomePage,
  ProfileTotalBodyContainer,
  LoadingContainer,
  ProfileDetailsContainer,
  ProfileContainer,
  ProfileImage,
  ProfileImageContainer,
  AddTransctionNameInput,
  AddTransctionLabel,
  AddTransctionInputContainer,
  DetailsContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ProfileDetails = (props) => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
  });

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    } else {
      const getLeaderboardData = async () => {
        setApiResponse({
          status: apiStatusConstants.inProgress,
          data: null,
        });

        let headers = {};
        let url = "";

        headers = {
          "Content-Type": "application/json",
          "x-hasura-role": "user",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-user-id": jwtToken,
        };
        url = "https://bursting-gelding-24.hasura.app/api/rest/profile";

        const options = {
          method: "GET",
          headers: headers,
        };
        const response = await fetch(url, options);
        const responseData = await response.json();

        if (response.ok) {
          setApiResponse({
            status: apiStatusConstants.success,
            data: responseData.users[0],
          });
        } else {
          setApiResponse({
            status: apiStatusConstants.failure,
            data: null,
            errorMsg: null,
          });
        }
      };

      getLeaderboardData();
    }
  }, [jwtToken, navigate]);

  const renderSuccessView = () => {
    const { data } = apiResponse;

    return (
      <>
        <ProfileImageContainer>
          <ProfileImage>{data.name[0].toUpperCase()}</ProfileImage>
        </ProfileImageContainer>
        <DetailsContainer>
          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              Your Name
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionname"
              value={data.name}
              // onChange={onChangePas}
              placeholder="Your Name"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              User Name
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionname"
              value={data.name}
              // onChange={onChangePas}
              placeholder="User Name"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              Email
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="email"
              id="addtransctionname"
              value={data.email}
              // onChange={onChangePas}
              placeholder="Email"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              Password
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="password"
              id="addtransctionname"
              value={data.email}
              // onChange={onChangePas}
              placeholder="Password"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionamount">
              Date of Birth
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="date"
              id="addtransctionamount"
              value={data.date_of_birth}
              // onChange={onChangePas}
              placeholder="Date of Birth"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              Present Address
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionname"
              value={data.present_address}
              // onChange={onChangePas}
              placeholder="Present Address"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionname">
              Permanent Address
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionname"
              value={data.permanent_address}
              // onChange={onChangePas}
              placeholder="Permanent Address"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionamount">
              City
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionamount"
              value={data.city}
              // onChange={onChangePas}
              placeholder="City"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionamount">
              Postal Code
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="number"
              id="addtransctionamount"
              value={data.postal_code}
              // onChange={onChangePas}
              placeholder="Postal Code"
              readOnly={true}
            />
          </AddTransctionInputContainer>

          <AddTransctionInputContainer>
            <AddTransctionLabel htmlFor="addtransctionamount">
              Country
            </AddTransctionLabel>
            <AddTransctionNameInput
              type="text"
              id="addtransctionamount"
              value={data.country}
              readOnly={true}
              // onChange={onChangePas}
              placeholder="Country"
            />
          </AddTransctionInputContainer>
        </DetailsContainer>
      </>
    );
  };

  const renderLoadingView = () => (
    <LoadingContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <ReactLoading type={"bars"} color={"#000000"} height={50} width={50} />
    </LoadingContainer>
  );

  const renderFailureView = (isDarkMood) => (
    <div className="no-search-result">
      <img
        className="not-found-search-result"
        src={
          isDarkMood
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        }
        alt="failure view"
      />
      <h1 className="failed-home-page">Oops! Something Went Wrong</h1>
      <p className="not-found-search-result-paragraph">
        We are having some trouble to complete your request.
        <br /> Please try again
      </p>
      <button
        className="not-found-search-result-button"
        type="button"
        // onClick={getLeaderboardData}
      >
        Retry
      </button>
    </div>
  );

  const renderLeaderboard = () => {
    const { status } = apiResponse;
    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };
  if (jwtToken !== undefined) {
    return (
      <TransctionContext.Consumer>
        {(value) => {
          const { selectOption, onChangeSelectOption } = value;

          if (selectOption !== "PROFILE") {
            onChangeSelectOption("PROFILE");
          }

          return (
            <ProfileHomePage>
              <SideBar />
              <ProfileTotalBodyContainer>
                <Header />
                <ProfileDetailsContainer>
                  <ProfileContainer>{renderLeaderboard()}</ProfileContainer>
                </ProfileDetailsContainer>
              </ProfileTotalBodyContainer>
            </ProfileHomePage>
          );
        }}
      </TransctionContext.Consumer>
    );
  } else {
    return null;
  }
};

export default ProfileDetails;
