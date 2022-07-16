import { useState, useEffect } from "react";
import { Password } from "../models/Password";

export default function usePasswordCheck(password: Password) {
  const firstPasswordLength = password.firstPassword.length;
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

  function checkPasswordValidation(value: string): string | boolean {
    const isWhitespace = /^(?=.*\s)/;
    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹])/;
    const isValidLength = /^.{10,}$/;

    if (isWhitespace.test(value)) {
      return "Password must not contain Whitespaces.";
    }
    if (!isContainsUppercase.test(value)) {
      return "Password must have at least one Uppercase Character.";
    }
    if (!isContainsLowercase.test(value)) {
      return "Password must have at least one Lowercase Character.";
    }
    if (!isContainsNumber.test(value)) {
      return "Password must contain at least one Digit.";
    }
    if (!isContainsSymbol.test(value)) {
      return "Password must contain at least one Special Symbol.";
    }
    if (!isValidLength.test(value)) {
      return "Password must have more than 10 Characters.";
    } else {
      return "Good password ✅";
    }
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
  };
}
