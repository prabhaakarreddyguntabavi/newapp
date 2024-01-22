// import { useState, useEffect } from "react";

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
} from "./styledComponents";

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
              <p>Sportify Subscription</p>
              <p>Shopping</p>
              <p>28 Jan, 10.40 AM</p>
              <p>-$150</p>
              <div>
                <EditImage
                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                  alt="edit"
                />

                <DeleteImage
                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                  alt="delete"
                />
              </div>
            </DachTransctionContainer>
          </LastThreeTransctions>
        </BodyContainer>
      </BodyMainContainer>
    </DashboardMainContainer>
  );
};

export default Dashboard;
