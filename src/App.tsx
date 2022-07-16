import { useState, ReactElement } from "react";
import usePasswordCheck from "./hooks/usePasswordCheck";
import { Password } from "./models/Password";
import "./App.css";

function App(): ReactElement {
  const [password, setPassword] = useState<Password>({
    firstPassword: "",
    secondPassword: "",
  });

  const inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    const { value, name } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

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
  } = usePasswordCheck(password);

  return (
    <div className="App">
      <h1 className="App-header">Password Checker</h1>
      <div className="container">
        <label htmlFor="firstPassword" className="sr-only">
          First Password
        </label>
        <input
          className="input--state__invalid"
          onChange={inputChange}
          name="firstPassword"
          type="password"
          placeholder="Enter password"
        />
        <span className="info-text--state__invalid">
          {checkPasswordValidation(password.firstPassword)}
        </span>
      </div>
      <div className="container">
        <label htmlFor="secondPassword" className="sr-only">
          Second Password
        </label>
        <input
          className={match ? "input--state__valid" : "input--state__invalid"}
          onChange={inputChange}
          name="secondPassword"
          type="password"
          placeholder="Enter password again"
        />
        {match ? (
          <span className="info-text--state__valid">passwords match ✅</span>
        ) : (
          <span className="info-text--state__invalid">passwords don't match ❌</span>
        )}
      </div>
      <ul>
        <li>Valid length: {validLength ? <span>✅</span> : <span>❌</span>}</li>
        <li>Has a number: {hasNumber ? <span>✅</span> : <span>❌</span>}</li>
        <li>One uppercase Character: {upperCase ? <span>✅</span> : <span>❌</span>}</li>
        <li>One lowercase Character: {lowerCase ? <span>✅</span> : <span>❌</span>}</li>
        <li>Has special characters: {specialChar ? <span>✅</span> : <span>❌</span>}</li>
        <li>
          Has required length:{" "}
          {requiredLength <= firstPasswordLength ? <span>✅</span> : <span>❌</span>}
        </li>
      </ul>
    </div>
  );
}

export default App;
