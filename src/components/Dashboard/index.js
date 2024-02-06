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

const genderData = [
  { year: 2020, maleCount: 100, femaleCount: 120 },
  { year: 2021, maleCount: 110, femaleCount: 130 },
  { year: 2022, maleCount: 120, femaleCount: 140 },
  { year: 2023, maleCount: 130, femaleCount: 150 },
  { year: 2024, maleCount: 140, femaleCount: 160 },
  { year: 2025, maleCount: 150, femaleCount: 170 },
  { year: 2026, maleCount: 160, femaleCount: 180 },
];

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
                  <TotalDebitCredite
                    isUserAdmin={jwtToken === "3"}
                    callApi={callApi}
                  />
                  <LastTransction>Last Transaction</LastTransction>
                  <LastThreeTransctionsFunction
                    isUserAdmin={jwtToken === "3"}
                    callApi={callApi}
                    lastThreeTransactions={callTransactionsUpdate}
                  />
                  <LastTransction>Debit & Credit Overview</LastTransction>
                  <BarChartContainer>
                    <div>
                      {genderData.map((yearData) => (
                        <div
                          key={yearData.year}
                          style={{
                            display: "inline-block",
                            marginRight: "10px",
                          }}
                        >
                          <GenderChart data={yearData} />
                        </div>
                      ))}
                    </div>
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
