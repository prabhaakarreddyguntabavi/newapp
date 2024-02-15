import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TransactionContext from "../../context/TransactionContext";

import SideBar from "../SideBar";
import Header from "../Header";
import TotalDebitCredite from "../TotalDebitCredite";
import LastThreeTransactionsFunction from "../LastThreeTransactions";
import GenderChart from "../GenderChart";
// import LastSevenDaysTransaction from "../LastSevenDaysTransaction";

import {
  DashboardMainContainer,
  BodyContainer,
  BodyMainContainer,
  LastTransaction,
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
      <TransactionContext.Consumer>
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
                  <TotalDebitCredite
                    isUserAdmin={jwtToken === "3"}
                    callApi={callApi}
                  />

                  <LastTransaction>Last Transaction</LastTransaction>
                  <LastThreeTransactionsFunction
                    isUserAdmin={jwtToken === "3"}
                    callApi={callApi}
                    lastThreeTransactions={callTransactionsUpdate}
                  />
                  <LastTransaction>Debit & Credit Overview</LastTransaction>
                  <BarChartContainer>
                    <GenderChart callApi={callApi} />
                    {/* <LastSevenDaysTransaction /> */}
                  </BarChartContainer>
                </BodyContainer>
              </BodyMainContainer>
            </DashboardMainContainer>
          );
        }}
      </TransactionContext.Consumer>
    );
  }
  return null;
};

export default Dashboard;
