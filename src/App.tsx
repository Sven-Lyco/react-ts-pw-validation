import { ReactElement, useEffect } from "react";
import usePasswordCheck from "./hooks/usePasswordCheck";
import useInput from "./hooks/useInput";
import Header from "./components/Header";
import { FirstInput, SecondInput } from "./components/Input/Input";
import Checklist from "./components/Checklist/Checklist";
import "./styles/app.css";

export default function App(): ReactElement {
  const { password, inputChange } = useInput();
  const {
    checkPasswordValidation,
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    requiredLength,
    firstPasswordLength,
    infoMessage,
    isValidPassword,
    handleShowFirstPassword,
    handleShowSecondPassword,
    showFirstPassword,
    showSecondPassword,
  } = usePasswordCheck(password);

  useEffect(() => {
    checkPasswordValidation(password.firstPassword);
  }, [checkPasswordValidation, password.firstPassword]);

  return (
    <div className="app">
      <Header headline="Password Checker" />
      <div className="container">
        <FirstInput
          isValidPassword={isValidPassword}
          showPassword={showFirstPassword}
          infoMessage={infoMessage}
          inputChange={inputChange}
          handleShowPassword={handleShowFirstPassword}
        />
        <SecondInput
          showPassword={showSecondPassword}
          inputChange={inputChange}
          handleShowPassword={handleShowSecondPassword}
          match={match}
        />
      </div>
      <Checklist
        validLength={validLength}
        hasNumber={hasNumber}
        upperCase={upperCase}
        lowerCase={lowerCase}
        specialChar={specialChar}
        requiredLength={requiredLength}
        firstPasswordLength={firstPasswordLength}
      />
    </div>
  );
}
