import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

import SideBar from "../SideBar";
import Header from "../Header";
import TransactionContext from "../../context/TransactionContext";
import UpdateTransaction from "../UpdateTransaction";
import DeleteTransaction from "../DeleteTransaction";
import FailureCase from "../FailureCase";

import {
  TransactionHomePage,
  TransactionTotalBodyContainer,
  TransactionsContainer,
  DashTransactionContainer,
  CreditDebitImage,
  TitleParagraph,
  CategoryParagraph,
  DateOfTransactionParagraph,
  EditImage,
  DeleteImage,
  TransactionBodyContainer,
  SelectFilterConditions,
  TransactionSelectFilter,
  SelectAllOption,
  SelectedContainer,
  SelectOption,
  SelectedCreditContainer,
  TransactionName,
  TransactionCategory,
  TransactionDate,
  TransactionAmount,
  CreditAmount,
  DebitAmount,
  LoadingContainer,
  HeadingDashTransactionContainer,
  NoTransactionsFountHeading,
  AddTransactionContainer,
  AddTransactionMainContainer,
  AddTransactionTextContainer,
  HeadingTextContainer,
  AddTransactionHeading,
  AddTransactionParagraph,
  AddTransactionCloseImage,
  LogoutContainer,
  AdminProfileContainer,
  TransactionUserName,
  UserProfileDetails,
  TitleUserParagraph,
  Div,
  Div2,
  EditDeleteContainer,
  TransactionParagraphMobile,
  TextContainer,
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

    let transactionsData = data;
    if (filterOption !== "alltransactions") {
      transactionsData = data.filter(
        (eachTransactionData) =>
          eachTransactionData.type.toUpperCase() === filterOption.toUpperCase()
      );
    }
    if (transactionsData.length !== 0) {
      return (
        <>
          <HeadingDashTransactionContainer>
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
          </HeadingDashTransactionContainer>

          {transactionsData.map((eachTransaction, index) => {
            const user = allProfileDetails.find(
              (findUser) => findUser.id === eachTransaction.user_id
            );
            console.log(transactionsData.length - 1 === index);
            return (
              <DashTransactionContainer
                length={transactionsData.length - 1 === index}
                key={eachTransaction.id}
              >
                {jwtToken === "3" ? (
                  <Div2 isAdmin={jwtToken === "3"}>
                    {eachTransaction.type === "credit" ? (
                      <CreditDebitImage
                        isAdmin={jwtToken === "3"}
                        src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_1_idrnjp.png"
                        alt="image"
                      />
                    ) : (
                      <CreditDebitImage
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
                        <CreditDebitImage
                          isAdmin={jwtToken === "3"}
                          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_1_idrnjp.png"
                          alt="image"
                        />
                      ) : (
                        <CreditDebitImage
                          isAdmin={jwtToken === "3"}
                          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706182841/Group_73_oztkbu.png"
                          alt="image"
                        />
                      )}
                    </>
                  ) : (
                    ""
                  )}

                  <TextContainer>
                    <TitleParagraph>
                      {eachTransaction.transaction_name}
                    </TitleParagraph>
                    <TransactionParagraphMobile>
                      {DateFormate(eachTransaction.date)}
                    </TransactionParagraphMobile>
                  </TextContainer>
                </Div>
                <CategoryParagraph isAdmin={jwtToken === "3"}>
                  {eachTransaction.category}
                </CategoryParagraph>
                <DateOfTransactionParagraph>
                  {DateFormate(eachTransaction.date)}
                </DateOfTransactionParagraph>

                {eachTransaction.type === "credit" ? (
                  <CreditAmount isAdmin={jwtToken === "3"}>
                    +${eachTransaction.amount}
                  </CreditAmount>
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
                          <AddTransactionMainContainer>
                            <AddTransactionContainer>
                              <AddTransactionTextContainer>
                                <HeadingTextContainer>
                                  <AddTransactionHeading>
                                    Update Transaction
                                  </AddTransactionHeading>
                                  <AddTransactionParagraph>
                                    You can update your transaction here
                                  </AddTransactionParagraph>
                                </HeadingTextContainer>
                                <AddTransactionCloseImage
                                  onClick={() => close()}
                                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
                                  alt="close"
                                />
                              </AddTransactionTextContainer>
                              <UpdateTransaction
                                eachTransaction={eachTransaction}
                                close={close}
                                callTransactionsUpdate={callTransactionsUpdate}
                              />
                            </AddTransactionContainer>
                          </AddTransactionMainContainer>
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
              </DashTransactionContainer>
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
    <LoadingContainer data-testid="loader">
      <ReactLoading type={"bars"} color={"#000000"} height={50} width={50} />
    </LoadingContainer>
  );

  const renderFailureView = (isDarkMood) => (
    <FailureCase updateApi={updateApi} />
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
      <TransactionContext.Consumer>
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
                  <TransactionSelectFilter
                    onClick={() => {
                      onChangeTransactionOption("ALLTRANSACTION");
                      onChangeFilter("alltransactions");
                    }}
                  >
                    <SelectAllOption
                      transactionOption={transactionOption === "ALLTRANSACTION"}
                    >
                      All Transaction
                    </SelectAllOption>
                    <SelectedContainer
                      transactionOption={transactionOption === "ALLTRANSACTION"}
                    ></SelectedContainer>
                  </TransactionSelectFilter>

                  <TransactionSelectFilter
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
                  </TransactionSelectFilter>

                  <TransactionSelectFilter
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
                  </TransactionSelectFilter>
                </SelectFilterConditions>
                <TransactionBodyContainer>
                  <TransactionsContainer>
                    {renderLeaderboard()}
                  </TransactionsContainer>
                </TransactionBodyContainer>
              </TransactionTotalBodyContainer>
            </TransactionHomePage>
          );
        }}
      </TransactionContext.Consumer>
    );
  }
  return null;
};

export default TransactionPage;
