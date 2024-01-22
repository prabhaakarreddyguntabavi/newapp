import styled from "styled-components";

export const LoginLabel = styled.label`
  margin-bottom: 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`;

export const EmailInput = styled.input`
  font-size: 14px;
  height: 30px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`;

export const PasswordInput = styled.input`
  font-size: 14px;
  height: 30px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  background-color: #ffffff;
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  width: 350px;
  background-color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0px 8px 40px rgba(100, 7, 7, 0.08);
  padding: 64px 48px 64px 48px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

export const LoginButton = styled.button`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const ErrorMessageParagraph = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: "Roboto";
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`;

export const LogoImage = styled.img`
  display: inline-flex;
  align-items: center;
  gap: 11px;
`;
// export const LoginFormContainer = styled.label``
