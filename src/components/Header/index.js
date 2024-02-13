import { useState } from "react";
import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";
import ReactLoading from "react-loading";

import MobileSideBar from "../MobileSideBar";
import { IoMdMenu } from "react-icons/io";

import TransctionContext from "../../context/TransctionContext";
import { IoAddCircleOutline } from "react-icons/io5";

import ErrorPopup from "../ErrorMessage";

import {
  HeaderMainContainer,
  AddTransactionButton,
  ButtonImage,
  ButtonText,
  AddTransctionButton,
  AddTransctionContainer,
  AddTransctionMainContainer,
  AddTransctionTextContainer,
  HeadingTextContainer,
  AddTransctionHeading,
  AddTransctionParagraph,
  AddTransctionCloseImage,
  AddTransctionInputContainer,
  AddTransctionLabel,
  AddTransctionNameInput,
  SelectTransctionType,
  SelectTransctionOptions,
  MobileLogoImage,
  MobileHeaderProfile,
  MobilePopupContainer,
  MobileParagraph,
  MobileAddTransactions,
} from "./styledComponents";

import "./index.css";

// const userDetails = [
//   { email: "jane.doe@gmail.com", password: "janedoe@123", userId: 1 },
//   { email: "samsmith@gmail.com", password: "samsmith@123", userId: 2 },
//   { email: "rahul@gmail.com", password: "rahul@123", userId: 4 },
//   { email: "teja@gmail.com", password: "teja@123", userId: 5 },
//   { email: "loki@gmail.com", password: "loki@123", userId: 6 },
//   { email: "ramesh@gmail.com", password: "ramesh@123", userId: 7 },
//   { email: "suresh@gmail.com", password: "suresh@123", userId: 8 },
//   { email: "prem@gmail.com", password: "prem@123", userId: 9 },
//   { email: "piyush@gmail.com", password: "piyush@123", userId: 10 },
//   { email: "isha@gmail.com", password: "isha@123", userId: 12 },
//   { email: "seema@gmail.com", password: "seema@123", userId: 14 },
//   { email: "arjun@gmail.com", password: "arjun@123", userId: 15 },
//   { email: "radha@gmail.com", password: "radha@123", userId: 16 },
//   { email: "phani@gmail.com", password: "phani@123", userId: 17 },
//   { email: "admin@gmail.com", password: "Admin@123", userId: 3 },
// ];

const Header = (props) => {
  const jwtToken = Cookies.get("jwt_token");

  const [addTransctionStatus, updateTransction] = useState(false);

  // const loginUser = userDetails.find(
  //   (eachUser) => eachUser.userId === parseInt(jwtToken)
  // );

  const [showError, setShowError] = useState("");

  const handleShowError = () => {
    setShowError(true);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const [name, addName] = useState();
  const [type, addType] = useState("credit");
  const [category, addCategory] = useState("Shopping");
  const [amount, AddAmount] = useState();
  const [date, addDate] = useState();

  const AddNameFunction = (event) => {
    console.log(event.target.value);
    if (event.target.value.length >= 30) {
      window.alert("Username shouldn't exceed 30 characters");
    } else {
      addName(event.target.value);
    }
  };

  const addTypeFunction = (event) => {
    addType(event.target.value);
  };

  const addCategoryFunction = (event) => {
    addCategory(event.target.value);
  };

  const AddAmountFunction = (event) => {
    AddAmount(event.target.value);
  };

  const addDateFunction = (event) => {
    addDate(event.target.value);
  };

  const updateValues = () => {
    addName("");
    addType("credit");
    addCategory("Shopping");
    AddAmount();
    addDate();
  };

  const getLeaderboardData = async (close) => {
    updateTransction("inprogress");

    let headers = {};
    let url = "";

    const body = JSON.stringify({
      name,
      type: type.toLowerCase(),
      category,
      amount,
      date,
      user_id: jwtToken,
    });

    headers = {
      "Content-Type": "application/json",
      "x-hasura-role": "user",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-user-id": jwtToken,
    };
    url = "https://bursting-gelding-24.hasura.app/api/rest/add-transaction";

    const options = {
      method: "POST",
      headers: headers,
      body: body,
    };
    const response = await fetch(url, options);

    if (response.ok) {
      const { updateApi } = props;
      updateApi(uuidv4());
      close();
      updateTransction("");
      updateValues();
    } else {
      updateTransction("");
      handleShowError();
    }
  };

  const renderSuccessView = () => {
    return (
      <Popup
        modal
        trigger={
          <div>
            <AddTransactionButton disabled={jwtToken === "3"} type="button">
              <ButtonImage
                src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705727508/plus_ndqvby.png"
                alt="plus"
              />{" "}
              Add Transaction
            </AddTransactionButton>
            <MobileAddTransactions type="button" disabled={jwtToken === "3"}>
              <IoAddCircleOutline className="add-icon" />
            </MobileAddTransactions>
          </div>
        }
      >
        {(close) => (
          <AddTransctionMainContainer>
            <AddTransctionContainer
            // onSubmit={() => {
            //   getLeaderboardData(close);
            // }}
            >
              <AddTransctionTextContainer>
                <HeadingTextContainer>
                  <AddTransctionHeading>Add Transaction</AddTransctionHeading>
                  <AddTransctionParagraph>
                    Lorem ipsum dolor sit amet, consectetur
                  </AddTransctionParagraph>
                </HeadingTextContainer>
                <AddTransctionCloseImage
                  onClick={() => {
                    close();
                    updateValues();
                  }}
                  src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
                  alt="close"
                />
              </AddTransctionTextContainer>

              <AddTransctionInputContainer>
                <AddTransctionLabel htmlFor="addtransctionname">
                  Transaction Name
                </AddTransctionLabel>
                <AddTransctionNameInput
                  required="required"
                  type="text"
                  id="addtransctionname"
                  value={name}
                  onChange={AddNameFunction}
                  placeholder="Enter Name"
                  maxLength={30}
                />
              </AddTransctionInputContainer>

              <AddTransctionInputContainer>
                <AddTransctionLabel htmlFor="transctionType">
                  Transaction Type
                </AddTransctionLabel>
                <SelectTransctionType
                  required="required"
                  placeholder="Select Transaction Type "
                  id="transctionType"
                  value={type}
                  onChange={addTypeFunction}
                >
                  <SelectTransctionOptions value="credit">
                    Credit
                  </SelectTransctionOptions>
                  <SelectTransctionOptions value="debit">
                    Debit
                  </SelectTransctionOptions>
                </SelectTransctionType>
              </AddTransctionInputContainer>

              <AddTransctionInputContainer>
                <AddTransctionLabel htmlFor="transctionCategory">
                  Category
                </AddTransctionLabel>
                <SelectTransctionType
                  required="required"
                  placeholder="Select"
                  id="transctionCategory"
                  value={category}
                  onChange={addCategoryFunction}
                >
                  <SelectTransctionOptions value="Shopping">
                    Shopping
                  </SelectTransctionOptions>
                  <SelectTransctionOptions value="Service">
                    Service
                  </SelectTransctionOptions>
                  <SelectTransctionOptions value="Transfer">
                    Transfer
                  </SelectTransctionOptions>
                </SelectTransctionType>
              </AddTransctionInputContainer>

              <AddTransctionInputContainer>
                <AddTransctionLabel htmlFor="addtransctionamount">
                  Amount
                </AddTransctionLabel>
                <AddTransctionNameInput
                  required="required"
                  type="number"
                  id="addtransctionamount"
                  value={amount}
                  onChange={AddAmountFunction}
                  placeholder="Enter Your Amount"
                />
              </AddTransctionInputContainer>

              <AddTransctionInputContainer>
                <AddTransctionLabel htmlFor="addtransctionamount">
                  Date
                </AddTransctionLabel>
                <AddTransctionNameInput
                  required="required"
                  type="datetime-local"
                  id="addtransctionamount"
                  value={date}
                  onChange={addDateFunction}
                  placeholder="Select Date"
                />
              </AddTransctionInputContainer>

              <AddTransctionButton
                type="submit"
                onClick={() => {
                  getLeaderboardData(close);
                }}
                disabled={addTransctionStatus === "inprogress"}
              >
                {addTransctionStatus === "inprogress" ? (
                  <ReactLoading
                    type={"bars"}
                    color={"#ffffff"}
                    height={20}
                    width={30}
                  />
                ) : (
                  "Add Transaction "
                )}
              </AddTransctionButton>
              {showError && (
                <ErrorPopup
                  message="Please Fill All Fields"
                  onClose={handleCloseError}
                />
              )}
            </AddTransctionContainer>
          </AddTransctionMainContainer>
        )}
      </Popup>
    );
  };

  // const renderLeaderboard = () => {
  //   const { status } = apiResponse;
  //   switch (status) {
  //     case apiStatusConstants.inProgress:
  //       return renderLoadingView();
  //     case apiStatusConstants.success:
  //       return renderSuccessView();
  //     case apiStatusConstants.failure:
  //       return renderFailureView();
  //     default:
  //       return null;
  //   }
  // };

  return (
    <TransctionContext.Consumer>
      {(value) => {
        const { selectOption } = value;
        return (
          <HeaderMainContainer>
            <Popup
              modal
              trigger={
                <MobileHeaderProfile type="button">
                  <MobileParagraph>
                    <IoMdMenu />
                  </MobileParagraph>
                </MobileHeaderProfile>
              }
            >
              {(close) => (
                <MobilePopupContainer>
                  <MobileSideBar close={close} />
                </MobilePopupContainer>
              )}
            </Popup>
            <MobileLogoImage
              src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705580146/Frame_507_ba197a.png"
              alt="logo"
            />
            <ButtonText>
              {selectOption.charAt(0).toUpperCase() +
                selectOption.slice(1).toLowerCase()}
            </ButtonText>
            {renderSuccessView()}
          </HeaderMainContainer>
        );
      }}
    </TransctionContext.Consumer>
  );
};

export default Header;
