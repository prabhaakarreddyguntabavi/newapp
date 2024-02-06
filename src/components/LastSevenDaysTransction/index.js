import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";

// import {
//   Chart,
//   Series,
//   CommonSeriesSettings,
//   Legend,
// } from "devextreme-react/chart";

import {
  LastThreeTransctions,
  DachTransctionContainer,
  EditImage,
  DeleteImage,
  TitleParagraph,
  CategaryParagraph,
  CrediteAmount,
  DateOfTransctionParagraph,
  DebitAmount,
  LoadingContainer,
  DebitImage,
  CrediteImage,
  NoTransactionsFountHeading,
  AddTransctionContainer,
  AddTransctionMainContainer,
  AddTransctionTextContainer,
  HeadingTextContainer,
  AddTransctionHeading,
  AddTransctionParagraph,
  AddTransctionCloseImage,
  LogoutContainer,
  AdminProfileContainer,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const LastSevenDaysTransction = () => {
  const grossProductData = [
    {
      state: "Illinois",
      year2016: 803,
      year2017: 823,
      year2018: 863,
    },
    {
      state: "Indiana",
      year2016: 316,
      year2017: 332,
      year2018: 332,
    },
    {
      state: "Michigan",
      year2016: 452,
      year2017: 459,
      year2018: 470,
    },
    {
      state: "Ohio",
      year2016: 621,
      year2017: 642,
      year2018: 675,
    },
    {
      state: "Wisconsin",
      year2016: 290,
      year2017: 294,
      year2018: 301,
    },
  ];

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

      if (jwtToken === "3") {
        headers = {
          "Content-Type": "application/json",
          "x-hasura-role": "admin",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        };

        url =
          "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin";
      } else {
        headers = {
          "Content-Type": "application/json",
          "x-hasura-role": "user",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-user-id": jwtToken,
        };
        url =
          "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days";
      }

      const options = {
        method: "GET",
        headers: headers,
      };
      const response = await fetch(url, options);
      const responseData = await response.json();

      if (response.ok) {
        setApiResponse({
          status: apiStatusConstants.success,
          data: responseData.last_7_days_transactions_credit_debit_totals,
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
  }, []);

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const renderSuccessView = () => {
    const { data } = apiResponse;
    if (data.length !== 0) {
      function calculateDailySums(transactions) {
        const dailySums = {};
        let totalDailySums = [];

        transactions.forEach((transaction) => {
          const date = transaction.date.split("T")[0]; // Extracting the date part

          if (!dailySums[date]) {
            dailySums[date] = {
              debit: 0,
              credit: 0,
              type: transaction.type,
              date: getDayOfWeek(transaction.date),
              sum: 0,
            };
          }

          if (transaction.type === "debit") {
            dailySums[date].debit += transaction.sum;
          } else if (transaction.type === "credit") {
            dailySums[date].credit += transaction.sum;
          }

          dailySums[date].sum += transaction.sum;
        });

        totalDailySums = Object.values(dailySums);

        return { dailySums, totalDailySums };
      }

      const { totalDailySums } = calculateDailySums(data);

      return (
        <>
          {/* <Chart
            className="bar-chart"
            majorGridLines={{ visible: false }}
            id="chart"
            dataSource={totalDailySums}
          >
            <Legend
              verticalAlignment="bottom"
              horizontalAlignment="center"
            ></Legend>
            <CommonSeriesSettings
              argumentField="date"
              type="bar"
            ></CommonSeriesSettings>
            <Series
              className="credit-transction"
              valueField="credit"
              fill="#4D78FF"
            />
            <Series
              className="debit-transction"
              fill="#FCAA0B"
              valueField="debit"
            />
          </Chart> */}
        </>
      );
    }
    return (
      <NoTransactionsFountHeading>
        No Transactions Found
      </NoTransactionsFountHeading>
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

  return <>{renderLeaderboard()}</>;
};

export default LastSevenDaysTransction;
