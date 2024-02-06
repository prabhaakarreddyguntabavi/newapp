import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";

// import TransctionContext from "../../context/TransctionContext";

import {
  CreditContainer,
  HeadingAmount,
  Paragraph,
  CreditImage,
  CrediteTextContainer,
  ImageContainer,
  AmountDetailsContainer,
  DebitContainer,
  DebitTextContainer,
  DebitImageContainer,
  DebitHeadingAmount,
  DeditImage,
  LoadingContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const TotalDebitCredite = (props) => {
  const { isUserAdmin, callApi } = props;

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
  });

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    const getLeaderboardData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
      });

      let headers = {};
      let url = "";

      if (isUserAdmin) {
        headers = {
          "Content-Type": "application/json",
          "x-hasura-role": "admin",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-user-id": 3,
        };

        url =
          "https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin";
      } else {
        headers = {
          "Content-Type": "application/json",
          "x-hasura-role": "user",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-user-id": jwtToken,
        };
        url =
          "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";
      }

      const options = {
        method: "GET",
        headers: headers,
      };
      const response = await fetch(url, options);
      const responseData = await response.json();

      if (response.ok) {
        if (
          !isUserAdmin
            ? responseData.totals_credit_debit_transactions.length !== 0
            : responseData.transaction_totals_admin.length !== 0
        ) {
          setApiResponse({
            status: apiStatusConstants.success,
            data: !isUserAdmin
              ? responseData.totals_credit_debit_transactions
              : responseData.transaction_totals_admin,
          });
        } else {
          setApiResponse({
            status: apiStatusConstants.success,
            data: [
              {
                sum: 0,
                type: "credit",
              },
              {
                sum: 0,
                type: "debit",
              },
            ],
          });
        }
      } else {
        setApiResponse({
          status: apiStatusConstants.failure,
          data: null,
          errorMsg: null,
        });
      }
    };

    getLeaderboardData();
  }, [callApi]);

  const renderSuccessView = () => {
    return (
      <>
        <CreditContainer>
          <CrediteTextContainer>
            <HeadingAmount>
              $ {apiResponse.data[apiResponse.data.length - 2].sum}
            </HeadingAmount>
            <Paragraph>Credit</Paragraph>
          </CrediteTextContainer>
          <ImageContainer>
            <CreditImage
              src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705735242/Group_itp5q8.png"
              alt="group"
            />
          </ImageContainer>
        </CreditContainer>

        <DebitContainer>
          <DebitTextContainer>
            <DebitHeadingAmount>
              $ {apiResponse.data[apiResponse.data.length - 1].sum}
            </DebitHeadingAmount>
            <Paragraph>Debit</Paragraph>
          </DebitTextContainer>
          <DebitImageContainer>
            <DeditImage
              src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705741143/Group_1_x8rnbj.png"
              alt="group"
            />
          </DebitImageContainer>
        </DebitContainer>
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

  return <AmountDetailsContainer>{renderLeaderboard()}</AmountDetailsContainer>;
};

export default TotalDebitCredite;
