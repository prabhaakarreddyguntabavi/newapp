// import { useState, useEffect } from "react";

import React from "react";
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
} from "devextreme-react/chart";

import SideBar from "../SideBar";
import Header from "../Header";

import {
  DashboardMainContainer,
  BodyContainer,
  BodyMainContainer,
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
  LastTransction,
  LastThreeTransctions,
  DachTransctionContainer,
  CrediteDebitImage,
  EditImage,
  DeleteImage,
  TitleParagraph,
  CategaryParagraph,
  DateOfTransctionParagraph,
  CrediteDebitAmount,
  BarChartContainer,
} from "./styledComponents";

import "./index.css";

// const apiStatusConstants = {
//   initial: "INITIAL",
//   inProgress: "IN_PROGRESS",
//   success: "SUCCESS",
//   failure: "FAILURE",
// };

const Dashboard = () => {
  /* const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getLeaderboardData = async () => {
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });

      const headers = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": "your-admin-secret", // or 'x-hasura-access-key' for user-specific requests
      };

      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/all-transactions ";
      const options = {
        method: "GET",
        headers: headers,
      };
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);
    };

    getLeaderboardData();
  }, []);

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
  };*/

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

  return (
    <DashboardMainContainer>
      <SideBar />
      <BodyMainContainer>
        <Header />
        <BodyContainer>
          <AmountDetailsContainer>
            <CreditContainer>
              <CrediteTextContainer>
                <HeadingAmount>$ 2500</HeadingAmount>
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
                <DebitHeadingAmount>$ 5500</DebitHeadingAmount>
                <Paragraph>Debit</Paragraph>
              </DebitTextContainer>
              <DebitImageContainer>
                <DeditImage
                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705741143/Group_1_x8rnbj.png"
                  alt="group"
                />
              </DebitImageContainer>
            </DebitContainer>
          </AmountDetailsContainer>
          <LastTransction>Last Transction</LastTransction>
          <LastThreeTransctions>
            <DachTransctionContainer>
              <CrediteDebitImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                alt="image"
              />
              <TitleParagraph>Sportify Subscription</TitleParagraph>
              <CategaryParagraph>Shopping</CategaryParagraph>
              <DateOfTransctionParagraph>
                28 Jan, 10.40 AM
              </DateOfTransctionParagraph>
              <CrediteDebitAmount>-$150</CrediteDebitAmount>
              <EditImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                alt="edit"
              />

              <DeleteImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                alt="delete"
              />
            </DachTransctionContainer>
            <DachTransctionContainer>
              <CrediteDebitImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                alt="image"
              />
              <TitleParagraph>Sportify Subscription</TitleParagraph>
              <CategaryParagraph>Shopping</CategaryParagraph>
              <DateOfTransctionParagraph>
                28 Jan, 10.40 AM
              </DateOfTransctionParagraph>
              <CrediteDebitAmount>-$150</CrediteDebitAmount>
              <EditImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                alt="edit"
              />

              <DeleteImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                alt="delete"
              />
            </DachTransctionContainer>
            <DachTransctionContainer>
              <CrediteDebitImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/Group_328_hbywun.png"
                alt="image"
              />
              <TitleParagraph>Sportify Subscription</TitleParagraph>
              <CategaryParagraph>Shopping</CategaryParagraph>
              <DateOfTransctionParagraph>
                28 Jan, 10.40 AM
              </DateOfTransctionParagraph>
              <CrediteDebitAmount>-$150</CrediteDebitAmount>
              <EditImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                alt="edit"
              />

              <DeleteImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                alt="delete"
              />
            </DachTransctionContainer>
          </LastThreeTransctions>
          <LastTransction>Debit & Credit Overview</LastTransction>
          <BarChartContainer>
            <Chart
              className="bar-chart"
              majorGridLines={{ visible: false }}
              id="chart"
              dataSource={grossProductData}
            >
              <Legend
                verticalAlignment="bottom"
                horizontalAlignment="center"
              ></Legend>
              <CommonSeriesSettings
                argumentField="state"
                type="bar"
              ></CommonSeriesSettings>
              <Series
                className="credit-transction"
                argumentField="state"
                valueField="year2018"
              />
              <Series
                className="debit-transction"
                fill="#4D78FF"
                valueField="year2017"
              />
            </Chart>
          </BarChartContainer>
        </BodyContainer>
      </BodyMainContainer>
    </DashboardMainContainer>
  );
};

export default Dashboard;
