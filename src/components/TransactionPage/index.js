import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

import SideBar from "../SideBar";
import Header from "../Header";
import TransctionContext from "../../context/TransctionContext";
import UpdateTransaction from "../UpdateTransaction";
import DeleteTransaction from "../DeleteTransaction";

import {
  TransactionHomePage,
  TransactionTotalBodyContainer,
  TransctionsContainer,
  DachTransctionContainer,
  CrediteDebitImage,
  TitleParagraph,
  CategaryParagraph,
  DateOfTransctionParagraph,
  EditImage,
  DeleteImage,
  TransactionBodyContainer,
  SelectFilterConditions,
  TransctionSelectFilter,
  SelectAllOption,
  SelectedContainer,
  SelectOption,
  SelectedCreditContainer,
  TransactionName,
  TransactionCategory,
  TransactionDate,
  TransactionAmount,
  CrediteAmount,
  DebitAmount,
  LoadingContainer,
  HeadingDachTransctionContainer,
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
  TransactionUserName,
  UserProfileDetails,
  TitleUserParagraph,
  Div,
  Div2,
  EditDeleteContainer,
  TransctionParagraphMobile,
} from "./styledComponents";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const TransactionPage = () => {
  const jwtToken = Cookies.get("jwt_token");
  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
  });

  const [allProfileDetails, setProfileDetailsApiResponse] = useState([]);

  const [filterOption, onChangeFilter] = useState("alltransactions");

  const [callApi, updateApi] = useState("");

  const DateFormate = (date) => {
    const inputDateString = date;
    const inputDate = new Date(inputDateString);

    const day = inputDate.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[inputDate.getMonth()];
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedDate = `${day} ${month}, ${hours % 12}.${minutes} ${ampm}`;

    return formattedDate;
  };

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

        if (jwtToken === "3") {
          headers = {
            "Content-Type": "application/json",
            "x-hasura-role": "admin",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-user-id": jwtToken,
          };

          url =
            "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";
        } else {
          headers = {
            "Content-Type": "application/json",
            "x-hasura-role": "user",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-user-id": jwtToken,
          };
          url =
            "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";
        }

        if (jwtToken === "3") {
          const options = {
            method: "GET",
            headers: headers,
          };
          const allProfileDetails = await fetch(
            "https://bursting-gelding-24.hasura.app/api/rest/profile",
            options
          );
          const outPut = await allProfileDetails.json();

          setProfileDetailsApiResponse(outPut.users);
        }

        const limit = 1000;
        const offset = 0;

        const queryParams = `?limit=${limit}&offset=${offset}`;
        const finalUrl = `${url}${queryParams}`;

        const options = {
          method: "GET",
          headers: headers,
        };
        const response = await fetch(finalUrl, options);
        const responseData = await response.json();

        if (response.ok) {
          setApiResponse({
            status: apiStatusConstants.success,
            data: [...responseData.transactions].sort(
              (a, b) => new Date(b.date) - new Date(a.date)
            ),
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
  }, [navigate, jwtToken, callApi]);

  const callTransactionsUpdate = (id) => {
    updateApi(id);
  };

  const renderSuccessView = () => {
    const { data } = apiResponse;

    let transctionsData = data;
    if (filterOption !== "alltransactions") {
      transctionsData = data.filter(
        (eachTransctionData) =>
          eachTransctionData.type.toUpperCase() === filterOption.toUpperCase()
      );
    }
    if (transctionsData.length !== 0) {
      return (
        <>
          <HeadingDachTransctionContainer>
            {jwtToken === "3" ? (
              <TransactionUserName>User Name</TransactionUserName>
            ) : (
              ""
            )}
            <TransactionName isAdmin={jwtToken === "3"}>
              Transaction Name
            </TransactionName>
            <TransactionCategory isAdmin={jwtToken === "3"}>
              Category
            </TransactionCategory>
            <TransactionDate isAdmin={jwtToken === "3"}>Date</TransactionDate>
            <TransactionAmount isAdmin={jwtToken === "3"}>
              Amount
            </TransactionAmount>
          </HeadingDachTransctionContainer>

          {transctionsData.map((eachTransaction, index) => {
            const user = allProfileDetails.find(
              (findUser) => findUser.id === eachTransaction.user_id
            );
            console.log(transctionsData.length - 1 === index);
            return (
              <DachTransctionContainer
                length={transctionsData.length - 1 === index}
                key={eachTransaction.id}
              >
                {jwtToken === "3" ? (
                  <Div2 isAdmin={jwtToken === "3"}>
                    {eachTransaction.type === "credit" ? (
                      <CrediteDebitImage
                        isAdmin={jwtToken === "3"}
                        src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_1_idrnjp.png"
                        alt="image"
                      />
                    ) : (
                      <CrediteDebitImage
                        isAdmin={jwtToken === "3"}
                        src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_oztkbu.png"
                        alt="image"
                      />
                    )}

                    <UserProfileDetails>
                      <AdminProfileContainer>
                        {user.name[0].toUpperCase()}
                      </AdminProfileContainer>
                      <TitleUserParagraph>{user.name}</TitleUserParagraph>
                    </UserProfileDetails>
                  </Div2>
                ) : (
                  ""
                )}

                <Div isAdmin={jwtToken === "3"}>
                  {jwtToken !== "3" ? (
                    <>
                      {" "}
                      {eachTransaction.type === "credit" ? (
                        <CrediteDebitImage
                          isAdmin={jwtToken === "3"}
                          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_1_idrnjp.png"
                          alt="image"
                        />
                      ) : (
                        <CrediteDebitImage
                          isAdmin={jwtToken === "3"}
                          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_oztkbu.png"
                          alt="image"
                        />
                      )}
                    </>
                  ) : (
                    ""
                  )}

                  <div>
                    <TitleParagraph>
                      {eachTransaction.transaction_name}
                    </TitleParagraph>
                    <TransctionParagraphMobile>
                      {DateFormate(eachTransaction.date)}
                    </TransctionParagraphMobile>
                  </div>
                </Div>
                <CategaryParagraph isAdmin={jwtToken === "3"}>
                  {eachTransaction.category}
                </CategaryParagraph>
                <DateOfTransctionParagraph>
                  {DateFormate(eachTransaction.date)}
                </DateOfTransctionParagraph>

                {eachTransaction.type === "credit" ? (
                  <CrediteAmount isAdmin={jwtToken === "3"}>
                    +${eachTransaction.amount}
                  </CrediteAmount>
                ) : (
                  <DebitAmount isAdmin={jwtToken === "3"}>
                    -${eachTransaction.amount}
                  </DebitAmount>
                )}
                <EditDeleteContainer isAdmin={jwtToken === "3"}>
                  {jwtToken === "3" ? (
                    ""
                  ) : (
                    <>
                      <Popup
                        modal
                        trigger={
                          <EditImage
                            src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/pencil-02_lbbupq.png"
                            alt="edit"
                          />
                        }
                      >
                        {(close) => (
                          <AddTransctionMainContainer>
                            <AddTransctionContainer>
                              <AddTransctionTextContainer>
                                <HeadingTextContainer>
                                  <AddTransctionHeading>
                                    Update Transaction
                                  </AddTransctionHeading>
                                  <AddTransctionParagraph>
                                    You can update your transaction here
                                  </AddTransctionParagraph>
                                </HeadingTextContainer>
                                <AddTransctionCloseImage
                                  onClick={() => close()}
                                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
                                  alt="close"
                                />
                              </AddTransctionTextContainer>
                              <UpdateTransaction
                                eachTransaction={eachTransaction}
                                close={close}
                                callTransactionsUpdate={callTransactionsUpdate}
                              />
                            </AddTransctionContainer>
                          </AddTransctionMainContainer>
                        )}
                      </Popup>

                      <Popup
                        modal
                        trigger={
                          <DeleteImage
                            src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705900717/trash-01_uaykhq.png"
                            alt="delete"
                          />
                        }
                      >
                        {(close) => (
                          <LogoutContainer>
                            <DeleteTransaction
                              id={eachTransaction.id}
                              close={close}
                              callTransactionsUpdate={callTransactionsUpdate}
                            />
                          </LogoutContainer>
                        )}
                      </Popup>
                    </>
                  )}
                </EditDeleteContainer>
              </DachTransctionContainer>
            );
          })}
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
          const {
            transactionOption,
            onChangeTransactionOption,
            selectOption,
            onChangeSelectOption,
          } = value;

          if (selectOption !== "TRANSACTIONS") {
            onChangeSelectOption("TRANSACTIONS");
          }

          return (
            <TransactionHomePage>
              <SideBar />
              <TransactionTotalBodyContainer>
                <Header updateApi={updateApi} />
                <SelectFilterConditions>
                  <TransctionSelectFilter
                    onClick={() => {
                      onChangeTransactionOption("ALLTRNSACTION");
                      onChangeFilter("alltransactions");
                    }}
                  >
                    <SelectAllOption
                      transactionOption={transactionOption === "ALLTRNSACTION"}
                    >
                      All Transction
                    </SelectAllOption>
                    <SelectedContainer
                      transactionOption={transactionOption === "ALLTRNSACTION"}
                    ></SelectedContainer>
                  </TransctionSelectFilter>

                  <TransctionSelectFilter
                    onClick={() => {
                      onChangeTransactionOption("CREDIT");
                      onChangeFilter("credit");
                    }}
                  >
                    <SelectOption
                      transactionOption={transactionOption === "CREDIT"}
                    >
                      Credit
                    </SelectOption>
                    <SelectedCreditContainer
                      transactionOption={transactionOption === "CREDIT"}
                    ></SelectedCreditContainer>
                  </TransctionSelectFilter>

                  <TransctionSelectFilter
                    onClick={() => {
                      onChangeTransactionOption("DEBIT");
                      onChangeFilter("debit");
                    }}
                  >
                    <SelectOption
                      transactionOption={transactionOption === "DEBIT"}
                    >
                      Debit
                    </SelectOption>
                    <SelectedCreditContainer
                      transactionOption={transactionOption === "DEBIT"}
                    ></SelectedCreditContainer>
                  </TransctionSelectFilter>
                </SelectFilterConditions>
                <TransactionBodyContainer>
                  <TransctionsContainer>
                    {renderLeaderboard()}
                  </TransctionsContainer>
                </TransactionBodyContainer>
              </TransactionTotalBodyContainer>
            </TransactionHomePage>
          );
        }}
      </TransctionContext.Consumer>
    );
  }
  return null;
};

export default TransactionPage;
