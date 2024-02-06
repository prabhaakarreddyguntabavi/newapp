import { useState } from "react";
import Cookies from "js-cookie";

import ErrorPopup from "../ErrorMessage";

import {
  LogoutConformationContainer,
  WarningImageContainer,
  WarningImage,
  TextImageContainer,
  HeaderTextImageContainer,
  LogoutHeading,
  LogoutClosingImage,
  LogoutParagraph,
  TestContainer,
  LogoutButtonContainer,
  CancelLogoutButton,
  YesLogoutButton,
} from "./styledComponents";

const UpdateTransaction = (props) => {
  const { id, close, callTransactionsUpdate } = props;

  const jwtToken = Cookies.get("jwt_token");

  const [showError, setShowError] = useState(false);

  const [errorMessage, updateErrorMessage] = useState(false);

  const handleShowError = () => {
    setShowError(true);
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  const getLeaderboardData = async () => {
    let headers = {};
    let url = "";

    const body = JSON.stringify({
      id: id,
    });

    headers = {
      "Content-Type": "application/json",
      "x-hasura-role": "user",
      "x-hasura-admin-secret":
        "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      "x-hasura-user-id": jwtToken,
    };
    url = "https://bursting-gelding-24.hasura.app/api/rest/delete-transaction";

    const options = {
      method: "DELETE",
      headers: headers,
      body: body,
    };
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (response.ok) {
      callTransactionsUpdate(id);
      close();
    } else {
      updateErrorMessage(responseData.error);
      handleShowError();
    }
  };

  return (
    <LogoutConformationContainer>
      {showError && (
        <ErrorPopup message={errorMessage} onClose={handleCloseError} />
      )}
      <TestContainer>
        <WarningImageContainer>
          <WarningImage
            src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078759/danger_wb66ql.png"
            alt="delete"
          />
        </WarningImageContainer>
        <TextImageContainer>
          <HeaderTextImageContainer>
            <LogoutHeading>Are you sure you want to Delete?</LogoutHeading>
            <LogoutParagraph>
              This transaction will be deleted immediately. You can’t undo this
              action.
            </LogoutParagraph>
          </HeaderTextImageContainer>
        </TextImageContainer>
        <LogoutClosingImage
          onClick={() => close()}
          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1706078678/Close_gxeytv.png"
          alt="close"
        />
      </TestContainer>
      <LogoutButtonContainer>
        <YesLogoutButton
          type="button"
          onClick={() => {
            getLeaderboardData();
          }}
        >
          Yes, Delete
        </YesLogoutButton>
        <CancelLogoutButton
          type="button"
          className="trigger-button"
          data-testid="close"
          onClick={() => close()}
        >
          Cancel
        </CancelLogoutButton>
      </LogoutButtonContainer>
    </LogoutConformationContainer>
  );
};

export default UpdateTransaction;
