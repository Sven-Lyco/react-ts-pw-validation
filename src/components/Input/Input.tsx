import { ReactElement } from "react";
import Button from "../Button/";
import "./input.css";
import "../../styles/utility.css";
import { InputProps } from "../../models/Input";

export function FirstInput({
  isValidPassword,
  showPassword,
  infoMessage,
  inputChange,
  handleShowPassword,
}: InputProps): ReactElement {
  return (
    <div className="first-input-container">
      <label htmlFor="firstPassword" className="sr-only">
        First Password
      </label>
      <div className="flex-row">
        <input
          className={isValidPassword ? "input--state__valid" : "input--state__invalid"}
          onChange={inputChange}
          name="firstPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
        />
        <Button showPassword={showPassword} onClick={handleShowPassword} />
      </div>
      <span className={isValidPassword ? "info-text--state__valid" : "info-text--state__invalid"}>
        {infoMessage}
      </span>
    </div>
  );
}

export function SecondInput({
  showPassword,
  inputChange,
  handleShowPassword,
  match,
}: InputProps): ReactElement {
  return (
    <div className="second-input-container">
      <label htmlFor="secondPassword" className="sr-only">
        Second Password
      </label>
      <div className="flex-row">
        <input
          className={match ? "input--state__valid" : "input--state__invalid"}
          onChange={inputChange}
          name="secondPassword"
          type={showPassword ? "text" : "password"}
          placeholder="Enter password again"
        />
        <Button showPassword={showPassword} onClick={handleShowPassword} />
      </div>
      {match ? (
        <span className="info-text--state__valid">Passwords match ✅</span>
      ) : (
        <span className="info-text--state__invalid">Passwords don't match ❌</span>
      )}
    </div>
  );
}
