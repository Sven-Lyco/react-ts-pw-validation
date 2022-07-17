import { useState, useEffect } from "react";
import { Password } from "../models/Password";

export default function usePasswordCheck(password: Password) {
  const firstPasswordLength = password.firstPassword.length;
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [validLength, setValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [match, setMatch] = useState(false);
  const requiredLength = 10;

  useEffect(() => {
    setValidLength(firstPasswordLength >= requiredLength ? true : false);
    setUpperCase(password.firstPassword.toLowerCase() !== password.firstPassword);
    setLowerCase(password.firstPassword.toUpperCase() !== password.firstPassword);
    setHasNumber(/\d/.test(password.firstPassword));
    setMatch(!!password.firstPassword && password.firstPassword === password.secondPassword);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password.firstPassword));
  }, [password, requiredLength, firstPasswordLength]);

  function checkPasswordValidation(value: string): void {
    const isWhitespace = /^(?=.*\s)/;
    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/;
    const isValidLength = /^.{10,}$/;

    if (isWhitespace.test(value)) {
      setInfoMessage("Password must not contain whitespaces.");
      setIsValidPassword(false);
      return;
    }
    if (!isContainsUppercase.test(value)) {
      setInfoMessage("Password must have at least one uppercase character.");
      setIsValidPassword(false);
      return;
    }
    if (!isContainsLowercase.test(value)) {
      setInfoMessage("Password must have at least one lowercase character.");
      setIsValidPassword(false);
      return;
    }
    if (!isContainsNumber.test(value)) {
      setInfoMessage("Password must contain at least one digit.");
      setIsValidPassword(false);
      return;
    }
    if (!isContainsSymbol.test(value)) {
      setInfoMessage("Password must contain at least one special symbol.");
      setIsValidPassword(false);
      return;
    }
    if (!isValidLength.test(value)) {
      setInfoMessage("Password must have more than 10 characters.");
      setIsValidPassword(false);
      return;
    } else {
      setInfoMessage("Good password ✅");
      setIsValidPassword(true);
    }
  }

  function handleShowFirstPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowFirstPassword(!showFirstPassword);
  }

  function handleShowSecondPassword(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setShowSecondPassword(!showSecondPassword);
  }

  return {
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
  };
}
