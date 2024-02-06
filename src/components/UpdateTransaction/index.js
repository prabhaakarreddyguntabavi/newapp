import { useState } from "react";
import Cookies from "js-cookie";
import ErrorPopup from "../ErrorMessage";
import { v4 as uuidv4 } from "uuid";
import ReactLoading from "react-loading";

import {
  AddTransctionButton,
  AddTransctionInputContainer,
  AddTransctionLabel,
  AddTransctionNameInput,
  SelectTransctionType,
  SelectTransctionOptions,
} from "./styledComponents";

// const apiStatusConstants = {
//   initial: "INITIAL",
//   inProgress: "IN_PROGRESS",
//   success: "SUCCESS",
//   failure: "FAILURE",
// };

const setTimeFormate = (date) => {
  const inputDateString = date;
  const inputDate = new Date(inputDateString);

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const hours = String(inputDate.getHours()).padStart(2, "0");
  const minutes = String(inputDate.getMinutes()).padStart(2, "0");
  const seconds = String(inputDate.getSeconds()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
};

const UpdateTransaction = (props) => {
  const { eachTransaction, close, callTransactionsUpdate } = props;

  const [apiResponse, setApiResponse] = useState({
    status: "",
    data: null,
  });

  const [addTransctionStatus, updateTransction] = useState(false);

  const [errorMessage, updateErrorMessage] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleShowError = () => {
    setShowError(true);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const [name, addName] = useState(eachTransaction.transaction_name);
  const [type, addType] = useState(eachTransaction.type);
  const [category, addCategory] = useState(eachTransaction.category);
  const [amount, AddAmount] = useState(eachTransaction.amount);
  const [date, addDate] = useState(eachTransaction.date);

  const AddNameFunction = (event) => {
    addName(event.target.value);
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

  const jwtToken = Cookies.get("jwt_token");

  const getLeaderboardData = async () => {
    updateTransction("inprogress");

    setApiResponse({
      status: "",
      data: null,
    });

    let headers = {};
    let url = "";

    const body = JSON.stringify({
      id: eachTransaction.id,
      name,
      type,
      category,
      amount,
      date,
    });

    headers = {
      "Content-Type": "application/json",
      "x-hasura-role": "user",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-user-id": jwtToken,
    };
    url = "https://bursting-gelding-24.hasura.app/api/rest/update-transaction";

    const options = {
      method: "POST",
      headers: headers,
      body: body,
    };
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (response.ok) {
      callTransactionsUpdate(uuidv4());
      close();
      setApiResponse({
        status: "",
        data: responseData.transactions,
        errorMsg: null,
      });
    } else {
      handleShowError();
      setApiResponse({
        status: "",
        data: null,
        errorMsg: responseData.error,
      });
    }
  };

  return (
    <>
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
          <SelectTransctionOptions value="debit">Debit</SelectTransctionOptions>
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
          value={setTimeFormate(date)}
          onChange={addDateFunction}
          placeholder="Select Date"
        />
      </AddTransctionInputContainer>

      <AddTransctionButton
        type="button"
        onClick={() => {
          getLeaderboardData();
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
          "Update Transaction "
        )}
      </AddTransctionButton>
      {showError && (
        <ErrorPopup message={apiResponse.errorMsg} onClose={handleCloseError} />
      )}
    </>
  );
};

export default UpdateTransaction;
