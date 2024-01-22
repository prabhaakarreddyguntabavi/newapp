import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import {
  LoginLabel,
  EmailInput,
  PasswordInput,
  LoginContainer,
  LoginFormContainer,
  InputContainer,
  LoginButton,
  ErrorMessageParagraph,
  LogoImage,
} from "./styledComponents";

const userDetails = [
  { email: "jane.doe@gmail.com", password: "janedoe@123", userId: 1 },
  { email: "samsmith@gmail.com", password: "samsmith@123", userId: 2 },
  { email: "rahul@gmail.com", password: "rahul@123", userId: 4 },
  { email: "teja@gmail.com", password: "teja@123", userId: 5 },
  { email: "loki@gmail.com", password: "loki@123", userId: 6 },
  { email: "ramesh@gmail.com", password: "ramesh@123", userId: 7 },
  { email: "suresh@gmail.com", password: "suresh@123", userId: 8 },
  { email: "prem@gmail.com", password: "prem@123", userId: 9 },
  { email: "piyush@gmail.com", password: "piyush@123", userId: 10 },
  { email: "isha@gmail.com", password: "isha@123", userId: 12 },
  { email: "seema@gmail.com", password: "seema@123", userId: 14 },
  { email: "arjun@gmail.com", password: "arjun@123", userId: 15 },
  { email: "radha@gmail.com", password: "radha@123", userId: 16 },
  { email: "phani@gmail.com", password: "phani@123", userId: 17 },
  { email: "admin@gmail.com", password: "Admin@123", userId: "Admin" },
];

const LoginForm = (props) => {
  const [emailId, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [onEnterEmailDict, setEmailDict] = useState({});
  const navigate = useNavigate();

  const onEnterEmailId = () => {
    setEmailDict(userDetails.find((eachId) => eachId.email === emailId));
  };

  const onChangeEmailID = (event) => onChangeEmail(event.target.value);

  const onChangePas = (event) => onChangePassword(event.target.value);

  const onLoginField = () => {
    if (emailId === "") {
      setErrorMessage("Please Enter Email");
    } else if (password === "") {
      setErrorMessage("Please Enter Password");
    } else if (
      onEnterEmailDict.email !== emailId ||
      onEnterEmailDict.password !== password
    ) {
      setErrorMessage("Please Enter Valid Email or Password");
    } else if (
      onEnterEmailDict.email === emailId ||
      onEnterEmailDict.password === password
    ) {
      setErrorMessage("");
      Cookies.set("jwt_token", onEnterEmailDict.userId, {
        expires: 30,
      });
      navigate("/");
    }
    return null;
  };

  const jwtToken = Cookies.get("jwt_token");
  console.log(jwtToken);

  if (jwtToken !== undefined) {
    navigate("/");
  }
  return (
    <LoginContainer>
      <LoginFormContainer className="form-container">
        <LogoImage
          src="https://res.cloudinary.com/dwdq2ofjm/image/upload/v1705580146/Frame_507_ba197a.png"
          alt="website logo"
        />
        <InputContainer>
          <LoginLabel className="input-label" htmlFor="emailId">
            Email
          </LoginLabel>
          <EmailInput
            type="email"
            id="emailId"
            value={emailId}
            onChange={onChangeEmailID}
            onBlur={onEnterEmailId}
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
          <PasswordInput
            type="password"
            id="password"
            value={password}
            onChange={onChangePas}
            placeholder="Password"
          />
        </InputContainer>
        <LoginButton type="button" onClick={onLoginField}>
          Login
        </LoginButton>
        {errorMessage && (
          <ErrorMessageParagraph>*{errorMessage}</ErrorMessageParagraph>
        )}
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginForm;
