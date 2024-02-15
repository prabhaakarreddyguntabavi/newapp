import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TransctionContext from "../../context/TransctionContext";

import SideBar from "../SideBar";
import Header from "../Header";
import TotalDebitCredite from "../TotalDebitCredite";
import LastThreeTransctionsFunction from "../LastThreeTransctions";
import GenderChart from "../GenderChart";
// import LastSevenDaysTransction from "../LastSevenDaysTransction";

import {
  DashboardMainContainer,
  BodyContainer,
  BodyMainContainer,
  LastTransction,
  BarChartContainer,
} from "./styledComponents";

import "./index.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [callApi, updateApi] = useState("");

  const jwtToken = Cookies.get("jwt_token");

  const callTransactionsUpdate = (id) => {
    updateApi(id);
  };

  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
  }, [jwtToken, navigate]);

  if (jwtToken !== undefined) {
    return (
      <TransctionContext.Consumer>
        {(value) => {
          const { selectOption, onChangeSelectOption } = value;
          if (selectOption !== "DASHBOARD") {
            onChangeSelectOption("DASHBOARD");
          }

          return (
            <DashboardMainContainer>
              <SideBar />
              <BodyMainContainer>
                <Header updateApi={callTransactionsUpdate} />
                <BodyContainer>
                  <div>
                    <TotalDebitCredite
                      isUserAdmin={jwtToken === "3"}
                      callApi={callApi}
                    />
                  </div>
                  <LastTransction>Last Transaction</LastTransction>
                  <LastThreeTransctionsFunction
                    isUserAdmin={jwtToken === "3"}
                    callApi={callApi}
                    lastThreeTransactions={callTransactionsUpdate}
                  />
                  <LastTransction>Debit & Credit Overview</LastTransction>
                  <BarChartContainer>
                    <GenderChart callApi={callApi} />
                    {/* <LastSevenDaysTransction /> */}
                  </BarChartContainer>
                </BodyContainer>
              </BodyMainContainer>
            </DashboardMainContainer>
          );
        }}
      </TransctionContext.Consumer>
    );
  }
  return null;
};

export default Dashboard;
